const Thing = require('../models/thing');
const axios = require('axios');

exports.createThing = (req, res, next) => {
    const thing = new Thing({
        country_code: req.params.country_code,
        country_name: req.body.country_name,
        total_dead: req.body.total_dead,
        total_case: req.body.total_case,
        population: req.body.population,
        detail: req.body.detail
    });

    thing.save().then(
        () => {
            res.status(201).json({
                message: 'Post saved successfully !'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}

exports.getOneThing = (req, res, next) => {
    Thing.findOne({
        _id: req.params.id
    }).then(
        (thing) => {
            res.status(200).json(thing);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
}

exports.modifyThing = (req, res, next) => {
    const thing = new Thing({
        country_code: req.params.country_code,
        country_name: req.body.country_name,
        total_dead: req.body.total_dead,
        total_case: req.body.total_case,
        population: req.body.population,
        detail: req.body.detail
    });

    Thing.updateOne({_id: req.params.id}, thing).then(
        () => {
            res.status(201).json({
                message: 'Thing updated successfully !'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}

exports.deleteThing = (req, res, next) => {
    Thing.deleteOne({_id: req.params.id}).then(
        () => {
            res.status(200).json({ message: 'Deleted !'});
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}

exports.getAllStuff = (req, res, next) => {
    axios.get('http://api.kowanio.xyz/country/all').then(response => {
        var stuff = [];

        response.data.forEach(item => stuff.push({
            country_code: item.country_code,
            country_name: item.country_name,
            total_dead: item.total_dead,
            total_case: item.total_case,
            population: item.population,
            detail: item.detail
        }));
        //console.log(stuff);
        const thing = new Thing({
            covid_data: stuff
        });

        thing.save().then(
            () => {
                Thing.find().then(
                    (things) => {
                        res.status(200).json(things);
                    }
                ).catch(
                    (error) => {
                        res.status(400).json({
                            error: error
                        });
                    }
                );
            }
        ).catch(
            (error) => {
                res.status(400).json({
                    error: error
                });
            }
        );
    }).catch(error => {
        console.log(error);
    });
}

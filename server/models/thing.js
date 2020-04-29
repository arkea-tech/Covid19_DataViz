const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
    covid_data: { type: Array, required: true }
});

module.exports = mongoose.model('Thing', thingSchema);

const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
    dead: { type: Number, required: true },
    healed: { type: Number, required: true },
    case: { type: Number, required: true }
});

module.exports = mongoose.model('Thing', thingSchema);

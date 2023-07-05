const mongoose = require('mongoose');

const styleSchema = new mongoose.Schema({
    designID: {
        type: String,
    },
    styleID: {
        type: String,
    },
    styleDescription: {
        type: String,
    },
    styleImages: {
        type: String,
    },
    styleCostPerItem: {
        type: String,
    },
});

const Style = mongoose.model('Style', styleSchema);
module.exports = Style;
const mongoose = require('mongoose');

const designSchema = new mongoose.Schema({
    designID: {
        type: String,
    },
    orderID: {
        type: String,
    },
    designType: {
        type: String,
    },
    designDescription: {
        type: String,
    },
    designNotes: {
        type: String,
    },
    designImages: {
        type: String,
    },
    designNumberGarments: {
        type: String,
    },
    designNumber: {
        type: String,
    },
    designTotalItems: {
        type: String,
    },
    designTotalCost: {
        type: String,
    },
});

const Design = mongoose.model('Design', designSchema);
module.exports = Design;
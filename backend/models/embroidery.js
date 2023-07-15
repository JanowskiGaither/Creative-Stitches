const mongoose = require('mongoose');

const embroiderySchema = new mongoose.Schema({
    designID: {
        type: String,
    },
    embroideryID: {
        type: String,
    },
    embroideryJobDescription: {
        type: String,
    },
    embroideryAmount: {
        type: String,
    },
    embroideryThread: {
        type: String,
    },
    embroideryMaterial: {
        type: String,
    },
    embroideryCostPerItem: {
        type: String,
    },
    embroideryTotalCost: {
        type: String,
    },
});

const Embroidery = mongoose.model('Embroidery', embroiderySchema);
module.exports = Embroidery;
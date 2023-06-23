const mongoose = require('mongoose');

const garment_schema = new mongoose.Schema({
    designID: {
        type: String,
    },
    garmentID: {
        type: String,
    },
    garmentGender: {
        type: String,
    },
    garmentGender: {
        type: String,
    },
    garmentStyleNumber: {
        type: String,
    },
    garmentAmount: {
        type: String,
    },
    garmentCostPerItem: {
        type: String,
    },
    garmentTotalCost: {
        type: String,
    },
});

const Garment = mongoose.model('Garment', garment_schema);
module.exports = Garment;
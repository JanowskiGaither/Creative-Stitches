const mongoose = require('mongoose');

const garment_schema = new mongoose.Schema({
    designID: {
        type: String,
    },
    orderID: {
        type: String,
    },
    garmentID: {
        type: String,
    },
    garmentNumberGarments: {
        type: String,
    },
    garmentNumber: {
        type: String,
    },
    garmentAgeGender: {
        type: String,
    },
    garmentSize: {
        type: String,
    },
    garmentStyleNumber: {
        type: String,
    },
    garmentColor: {
        type: String,
    },
    garmentQuantity: {
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
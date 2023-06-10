const mongoose = require('mongoose');

const garmentSchema = new mongoose.Schema({ 
    designID: {
        type: String,
    },
    garmentID: {
        type: String,
    },
    itemDescription: {
        type: String,
    },
    itemType: {
        type: String,
    },
    garmentDetailsID: {
        type: String,
    },
    garmentDetailsSize: {
        type: String,
    },
    garmentDetailsGender: {
        type: String,
    },
    garmentDetailsAmount: {
        type: String,
    },
    garmentDetailsCostPerItem: {
        type: String,
    },
    styleNumber: {
        type: String,
    },
    customizationType: {
        type: String,
    },
    designImages: {
        type: String,
    },
    designNotes: {
        type: String,
    },
  });

const Garment = mongoose.model('Garment', garmentSchema);
module.exports = Garment;
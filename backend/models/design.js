const mongoose = require('mongoose');

const designSchema = new mongoose.Schema({ 
    designID: {
        type: String,
        required: true
    },
    orderID: {
        type: String,
        required: true
    },
    itemDescription: {
        type: String,
        required: true
    },
    itemType: {
        type: String,
        required: true
    },
    garmentDetails: [{garmentID: String,size: String, gender: String, amount: String, costPerItem: String}],
    styleNumber: {
        type: String,
    },
    customizationType: {
        type: String,
        required: true
    },
    designImages: {
        type: String,
    },
    designNotes: {
        type: String,
    },
  });

const Design = mongoose.model('Design', designSchema);
module.exports = Design;
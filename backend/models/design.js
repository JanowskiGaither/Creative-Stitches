const mongoose = require('mongoose');

const designSchema = new mongoose.Schema({ 
    designID: {
        type: String,
    },
    garmentID: {
        type: String,
    },
    size: {
        type: String,
    },
    gender: {
        type: String,
    },
    amount: {
        type: String,
    },
    costPerItem: {
        type: String,
    },
    totalCost: {
        type: String,
    },
  });

const Design = mongoose.model('Design', designSchema);
module.exports = Design;
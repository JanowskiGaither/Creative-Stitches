const mongoose = require('mongoose');

const otherSchema = new mongoose.Schema({
    designID: {
        type: String,
    },
    otherID: {
        type: String,
    },
    otherJobDescription: {
        type: String,
    },
    otherAmount: {
        type: String,
    },
    otherCostPerItem: {
        type: String,
    },
    otherTotalCost: {
        type: String,
    },
});

const Other = mongoose.model('Other', otherSchema);
module.exports = Other;
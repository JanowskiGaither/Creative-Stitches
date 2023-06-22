const mongoose = require('mongoose');

const other_schema = new mongoose.Schema({
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

const Other = mongoose.model('Other', other_schema);
module.exports = Other;
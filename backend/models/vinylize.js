const mongoose = require('mongoose');

const vinylizeSchema = new mongoose.Schema({
    designID: {
        type: String,
    },
    vinylizeID: {
        type: String,
    },
    vinylizeJobDescription: {
        type: String,
    },
    vinylizeAmount: {
        type: String,
    },
    vinylizeCostPerItem: {
        type: String,
    },
    vinylizeTotalCost: {
        type: String,
    },
});

const Vinylize = mongoose.model('Vinylize', vinylizeSchema);
module.exports = Vinylize;
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderID: {
        type: String,
    },
    customerID: {
        type: String,
    },
    orderDescription: {
        type: String,
    },
    orderDate: {
        type: Date,
    },
    requestedDeliveryDate: {
        type: Date,
    },
    scheduledDeliveryDate: {
        type: Date,
    },
    taxExemption: {
        type: String,
        default: 'N/A'
    },
    totalItems: {
        type: String,
    },
    totalMaterialCost: {
        type: String,
    },
    totalCost: {
        type: String,
    },
    totalTaxes: {
        type: String,
    },
    totalProfit: {
        type: String,
    },
    totalPrice: {
        type: String,
    },
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
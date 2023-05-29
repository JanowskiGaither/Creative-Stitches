const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({ 
    orderID: {
        type: String,
        required: true
    },
    customerID: {
        type: String,
        required: true
    },
    orderDescription: {
        type: String,
        required: true
    },
    orderDate: {
        type: Date,
        required: true
    },
    requestedDeliveryDate: {
        type: Date,
        required: true
    },
    scheduledDeliveryDate: {
        type: Date,
    },
    taxExemption: {
        type: String,
        default: 'N/A'
    },
    designIds: [String],
    totalItems: {
        type: String,
        required: true
    },
    totalCost: {
        type: String,
        required: true
    },
    totalTaxes: {
        type: String,
        required: true
    },
    totalSale: {
        type: String,
        required: true
    },
  });

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
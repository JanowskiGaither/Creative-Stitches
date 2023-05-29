const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({ 
    customerID: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    organization: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    ordersIdsInProgress: [String],
    orderIdsCompleted: [String],
  });

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;
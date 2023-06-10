const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({ 
    customerID: {
        type: String,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    organization: {
        type: String,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    },
  });

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;
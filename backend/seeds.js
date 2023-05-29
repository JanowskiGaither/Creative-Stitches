const mongoose = require('mongoose');
const Order = require('./models/order');
const Customer = require('./models/customer');
const Design = require('./models/design');
mongoose.connect('mongodb://mongo:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongo Connection Open")
    })
    .catch(err => {
        console.log("CONNECTION ERROR:")
        console.log(err)

    });

const order = new Order({
    orderID: 'BobbyJohnson',
    customerID: '1',
    orderDescription: 'CHS Baseball Team 2023',
    orderDate: '2023-03-07',
    requestedDeliveryDate: '2023-03-08',
    scheduledDeliveryDate: '2023-03-14',
    taxExemption: 'CHS',
    designIds: ['1','2'],
    totalItems: '26',
    totalCost: '217.22',
    totalTaxes: '21.72',
    totalSale: '238.94'
});

const customer = new Customer({
    customerID: 'BobbyJohnson',
    firstName: 'Bobby',
    lastName: 'Johnson',
    organization: 'Claxton High School',
    phone: '987-654-3210',
    email: 'bobby.johnson@chs.edu',
    ordersIdsInProgress: ['BobbyJohnson'],
});

const design1 = new Design({
    designID: '1',
    orderID: 'BobbyJohnson',
    itemDescription: 'sweatshirt',
    itemType: 'garment',
    garmentDetails: [{garmentID: "BobbyJohnson1",size: "L", gender: "Male", amount: "3", costPerItem: "22.50"}, 
        {garmentID: "BobbyJohnson2",size: "M", gender: "Male", amount: "4", costPerItem: "22.50"}],
    styleNumber: 'PC78',
    customizationType: 'N/A',
});

const design2 = new Design({
    designID: '2',
    orderID: 'BobbyJohnson',
    itemDescription: 'vinylize',
    itemType: 'vinylize',
    customizationType: 'vinylize',
});

order.save()
    .then(order => {
        console.log(order)
    })
    .catch(e => {
        console.log(e)
    })

customer.save()
    .then(customer => {
        console.log(customer)
    })
    .catch(e => {
        console.log(e)
    })

design1.save()
    .then(design1 => {
        console.log(design1)
    })
    .catch(e => {
        console.log(e)
    })
    
design2.save()
    .then(design2 => {
        console.log(design2)
    })
    .catch(e => {
        console.log(e)
    })
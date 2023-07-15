const express = require('express');
const mongoose = require('mongoose');
const Order = require('./models/order');
const Customer = require('./models/customer');
const Design = require('./models/design');
const Garment = require('./models/garment');
const Other = require('./models/other');
const Embroidery = require('./models/embroidery');
const Style = require('./models/style');
const Vinylize = require('./models/vinylize');
const app = express();
const port = 3000;

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://mongo:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Mongo Connection Open");
  })
  .catch(err => {
    console.log("CONNECTION ERROR:");
    console.log(err);

  });
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//Save order
async function saveOrder(order, design, customer) {

  // Save received Order and Customer information
  await Order.updateOne({ customerID: order.customerID, orderID: order.orderID }, { taxExemption: order.taxExemption, requestedDeliveryDate: order.requestedDeliveryDate }, { upsert: true });
  await Customer.updateOne({ customerID: customer.customerID }, {
    firstName: customer.firstName, lastName: customer.lastName, organization: customer.organization, phone: customer.phone, email: customer.email
  }, { upsert: true });
}

//Save garment
async function saveGarment(garment) {
  // Save received Garment information
  await Garment.updateOne({ designID: garment.designID, garmentID: garment.garmentID, orderID: garment.orderID }, {
    garmentNumber: garment.garmentNumber, garmentGender: garment.garmentGender, garmentSize: garment.garmentSize,
    garmentStyleNumber: garment.garmentStyleNumber, garmentAmount: garment.garmentAmount,
    garmentCostPerItem: garment.garmentCostPerItem, garmentTotalCost: garment.garmentTotalCost
  }, { upsert: true });
}

//Get garment
async function getGarment(garment) {
  console.log("--------------------start getGarment")
  // Check if new garment exists
  var query = await Garment.findOne({ orderID: garment.orderID, garmentID: garment.garmentID, designID: garment.designID }).exec();

  if (query) {
    console.log("--------------------return getGarment Result")
    return query;
  }
  else {
    //Create a blank response
    var garmentResponse = new Garment();
    garmentResponse.orderID = garment.orderID;
    garmentResponse.garmentID = garment.garmentID;
    garmentResponse.designID = garment.designID;
    garmentResponse.garmentSize = '';
    garmentResponse.garmentStyleNumber = '';
    garmentResponse.garmentAmount = 0;
    garmentResponse.garmentCostPerItem = 0;
    garmentResponse.garmentTotalCost = 0;

    return garmentResponse;
  }
}

//Get design
async function getDesign(design) {
  console.log("--------------------start getDesign")
  // Check if new garment exists
  var query = await Design.findOne({ orderID: design.orderID, designID: design.designID }).exec();

  if (query) {
    console.log("--------------------return getDesign Result")
    return query;
  }
  else {
    //Create a blank response
    var designResponse = new Design();
    designResponse.orderID = design.orderID;
    designResponse.garmentID = design.garmentID;
    designResponse.designID = design.designID;
    designResponse.designType = 'Garment';
    designResponse.designDescription = 'NA';
    designResponse.designNotes = 0;
    designResponse.designImages = 0;
    designResponse.designNumberGarments = 1;
    designResponse.designTotalCost = 0;

    return designResponse;
  }
}


//Get garment
async function getAllGarment(garment) {
  console.log("--------------------start getAllGarment")
  // Check if new garment exists
  var query = await Garment.find({ orderID: garment.orderID, designID: garment.designID }).exec();

  if (query) {
    console.log("--------------------return getAllGarment Result")
    return query;
  }
  else {
    //Create a blank response
    var garmentResponse = new Garment();
    garmentResponse.orderID = garment.orderID;
    garmentResponse.garmentID = 0;
    garmentResponse.designID = garment.designID;
    garmentResponse.garmentSize = '';
    garmentResponse.garmentStyleNumber = '';
    garmentResponse.garmentAmount = 0;
    garmentResponse.garmentCostPerItem = 0;
    garmentResponse.garmentTotalCost = 0;

    return garmentResponse;
  }
}

//Save other
async function saveOther(other) {
  // Save received Other information
  await Other.updateOne({ designID: other.designID, garmentID: other.garmentID, orderID: other.orderID }, {
    otherJobDescription: other.otherJobDescription, otherAmount: other.otherAmount,
    otherCostPerItem: other.otherCostPerItem, otherTotalCost: other.otherTotalCost
  }, { upsert: true });
}

//Save design
async function saveDesign(design) {
  // Save Received Design information
  await Design.updateOne({ designID: design.designID, orderID: design.orderID }, {
    designType: design.designType, designDescription: design.designDescription, designNotes: design.designNotes,
    designImages: design.designImages, designNumberGarments: design.designNumberGarments, designTotalCost: design.designTotalCost
  }, { upsert: true });
}

app.post('/orderSubmit', async function (req, res) {
  var order = new Order(req.body);
  var design = new Design(req.body);
  var customer = new Customer(req.body);

  //console.log(order)
  try {
    saveOrder(order, design, customer);
    res.redirect('/design');
  } catch (error) {
    console.log(error)
  }
});

app.post('/designSubmit', async function (req, res) {
  var design = new Design(req.body);

  try {
    saveDesign(design);
  } catch (error) {
    console.log(error)
  }

  res.redirect('/');
});

app.post('/garmentSubmit', async function (req, res) {
  var garment = new Garment(req.body);

  try {
    saveGarment(garment);
    res.json('Success');
  } catch (error) {
    console.log(error)
  }
});

app.post('/garmentRetrieve', async function (req, res) {
  const garment = new Garment(req.body);

  console.log("--------------------Garment Retrieve Request")
  try {
    const result = await getGarment(garment);
    console.log(result)
    res.json(result);
    console.log("--------------------Send json getGarment Result")

  } catch (error) {
    console.log(error)
  }
});

app.post('/designRetrieve', async function (req, res) {
  const design = new Design(req.body);

  console.log("--------------------Design Retrieve Request")
  try {
    const result = await getDesign(design);
    console.log(result)
    res.json(result);
    console.log("--------------------Send json getDesign Result")

  } catch (error) {
    console.log(error)
  }


});

app.post('/garmentAllRetrieve', async function (req, res) {
  const garment = new Garment(req.body);

  console.log("--------------------GarmentAll Retrieve Request")
  try {
    const result = await getAllGarment(garment);
    console.log(result)
    res.json(result);
    console.log("--------------------Send json getAllGarment Result")

  } catch (error) {
    console.log(error)
  }


});

app.post('/otherSubmit', async function (req, res) {
  var other = new Other(req.body);

  try {
    saveOther(other);
  } catch (error) {
    console.log(error)
  }
});

app.get('/readOrder', async function (req, res) {
  try {
    const testOrder = await Order.findOne({ orderID: '1' });
    console.log(testOrder);
    console.log('------------------------------------------Read Order!')
    res.json(testOrder);
  } catch (error) {
    console.log(error)
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});


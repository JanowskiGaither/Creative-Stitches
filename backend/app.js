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
async function saveOrder(order) {

  // Save received information
  await Order.updateOne({ customerID: order.customerID, orderID: order.orderID }, { customerID: order.customerID, orderID: order.orderID, taxExemption: order.taxExemption, requestedDeliveryDate: order.requestedDeliveryDate }, { upsert: true });
}

//Save order
async function saveCustomer(customer) {
  console.log("Save Customer");
  console.log(customer);

  // Save received  Customer information
  await Customer.updateOne({ customerID: customer.customerID }, {
    customerID: customer.customerID, firstName: customer.firstName, lastName: customer.lastName, organization: customer.organization, phone: customer.phone, email: customer.email
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
  // Check if new garment exists
  var query = await Garment.findOne({ orderID: garment.orderID, garmentID: garment.garmentID, designID: garment.designID }).exec();

  if (query) {
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

//Get customer
async function getCustomer(customer) {
  // Check if customer exists
  //console.log("Get Customer");
  //console.log(customer);
  var query = await Customer.findOne({ customerID: customer.customerID }).exec();

  if (query) {
    return query;
  }
  else {
    //Create a blank response
    var customerResponse = new Customer();
    customerResponse.customerID = customer.customerID;
    customerResponse.firstName = "Nothing Found";
    customerResponse.lastName = '';
    customerResponse.organization = '';
    customerResponse.phone = '';
    customerResponse.email = 0;

    return customerResponse;
  }
}

//Get order
async function getOrder(order) {
  // Check if order exists
  var query = await Order.findOne({ orderID: order.orderID }).exec();

  if (query) {
    return query;
  }
  else {
    //Create a blank response
    var orderResponse = new Order();
    orderResponse.orderID = order.orderID;
    orderResponse.customerID = "NA";
    orderResponse.orderDescription = '';
    orderResponse.orderDate = '';
    orderResponse.requestedDeliveryDate = '';
    orderResponse.scheduledDeliveryDate = 0;
    orderResponse.taxExemption = 0;
    orderResponse.totalItems = 0;
    orderResponse.totalMaterialCost = 0;
    orderResponse.totalTaxes = 0;
    orderResponse.totalProfit = 0;
    orderResponse.totalSale = 0;

    return orderResponse;
  }
}

//Get garment
async function getGarment(garment) {
  // Check if new garment exists
  var query = await Garment.findOne({ orderID: garment.orderID, garmentID: garment.garmentID, designID: garment.designID }).exec();

  if (query) {
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

//Get garment
async function removeGarment(garment) {

  var query = await Garment.findOne({ orderID: garment.orderID, garmentID: garment.garmentID, designID: garment.designID }).exec();

  // Delete garment
  query = await Garment.findOneAndDelete({ orderID: garment.orderID, garmentID: garment.garmentID, designID: garment.designID }).exec();

  //If this wasn't the last garment then go through and update the numbers of the rest
  for (let i = parseInt(garment.garmentNumber, 10); i <= parseInt(garment.garmentNumberGarments, 10); i++) {
    var filter = { orderID: garment.orderID, garmentNumber: i, designID: garment.designID };
    var newGarmentID = garment.designID.toString() + '_' + (i - 1).toString();
    var update = { garmentNumber: (i - 1), garmentID: newGarmentID }
    var updateResult = await Garment.findOneAndUpdate(filter, update, { new: true }).exec();

    //console.log(updateResult)
  }

  if (query) {
    return query;
  }
  else {
    return "Deleted";
  }
}

//Get design
async function getDesign(design) {
  // Check if new garment exists
  var query = await Design.findOne({ orderID: design.orderID, designID: design.designID }).exec();

  if (query) {
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
  // Check if new garment exists
  var query = await Garment.find({ orderID: garment.orderID, designID: garment.designID }).exec();

  if (query) {
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

//Get garment
async function getAllDesign(design) {
  // Check if new garment exists
  var query = await Design.find({ orderID: design.orderID }).exec();

  if (query) {
    return query;
  }
  else {
    //Create a blank response
    var designResponse = new Design();
    designResponse.orderID = garment.orderID;
    designResponse.designID = '';
    designResponse.designType = '';
    designResponse.designDescription = '';
    designResponse.designNotes = 0;
    // designResponse.designImages = 0;
    designResponse.designNumberGarments = 0;
    designResponse.designTotalItems = 0;
    designResponse.designTotalCost = 0;

    return designResponse;
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
    designType: design.designType, designDescription: design.designDescription, designNotes: design.designNotes, designNumberGarments: design.designNumberGarments, designNumber: design.designNumber,
    designImages: design.designImages, designNumberGarments: design.designNumberGarments, designTotalCost: design.designTotalCost
  }, { upsert: true });
}

app.post('/orderSubmit', async function (req, res) {
  //console.log(req.body);
  var order = new Order(req.body);
  //console.log(order);
  try {
    saveOrder(order);
    res.redirect('/design');
  } catch (error) {
    console.log(error)
  }
});

app.post('/customerSubmit', async function (req, res) {
  var customer = new Customer(req.body);

  //console.log("-----------------req.body");
  //console.log(req.body);
  //console.log("-----------------Customer");
  //console.log(Customer);
  try {
    saveCustomer(customer);
  } catch (error) {
    console.log(error)
  }
});

app.post('/designSubmit', async function (req, res) {
  var design = new Design(req.body);

  try {
    await saveDesign(design);
  } catch (error) {
    console.log(error)
  }
  if (req.body.reviewOrder) {
    console.log("Go to review order ");
    res.redirect('/review');
  }
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

  try {
    const result = await getGarment(garment);
    res.json(result);

  } catch (error) {
    console.log(error)
  }
});

app.post('/customerRetrieve', async function (req, res) {
  const customer = new Customer(req.body);

  try {
    const result = await getCustomer(customer);
    res.json(result);

  } catch (error) {
    console.log(error)
  }
});

app.post('/orderRetrieve', async function (req, res) {
  const order = new Order(req.body);
  //console.log(order);
  try {
    const result = await getOrder(order);
    //console.log(result);
    res.json(result);

  } catch (error) {
    console.log(error)
  }
});

app.post('/garmentRemove', async function (req, res) {
  const garment = new Garment(req.body);

  console.log("--------------------Garment Remove Request");
  try {
    const result = await removeGarment(garment);
    res.json(result);
    console.log("Garment removed");

  } catch (error) {
    console.log(error);
  }
});

app.post('/designRetrieve', async function (req, res) {
  const design = new Design(req.body);

  try {
    const result = await getDesign(design);
    res.json(result);

  } catch (error) {
    console.log(error)
  }


});

app.post('/garmentAllRetrieve', async function (req, res) {
  const garment = new Garment(req.body);

  try {
    var result = await getAllGarment(garment);
    //result.sort({ garmentNumber: 1 });
    res.json(result);

  } catch (error) {
    console.log(error)
  }


});

app.post('/designAllRetrieve', async function (req, res) {
  const design = new Design(req.body);

  try {
    var result = await getAllDesign(design);
    //result.sort({ designNumber: 1 });
    res.json(result);

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
    res.json(testOrder);
  } catch (error) {
    console.log(error)
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});


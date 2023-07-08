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

//save order
async function saveOrder(order, design, customer) {

  const query = await Order.findOne({ orderID: order.orderID });
  if (!query) {
    console.log("++++++++++++++++++++++++++++++++++++++++++No Match");
    customer = await customer.save();
    order = await order.save();
    design = await design.save();
  } else {
    console.log("------------------------------------------Match!")
    await Order.updateOne({ orderID: order.orderID }, { taxExemption: order.taxExemption, requestedDeliveryDate: order.requestedDeliveryDate });
  }
}

//save design
async function saveDesign(design, garment, other) {

  const query = await Order.findOne({ designID: design.designID });
  if (!query) {
    console.log("++++++++++++++++++++++++++++++++++++++++++No Match");

    if (design.designType == 'Garment') {
      garment = await garment.save();
    }
    else {
      other = await other.save();
    }
    design = await design.save();
  } else {
    console.log("------------------------------------------Match!")

    if (design.designType == 'Garment') {
      Garment.updateOne({ designID: garment.designID }, {
        garmentGender: garment.garmentGender, garmentSize: garment.garmentSize, garmentStyleNumber: garment.garmentStyleNumber,
        garmentAmount: garment.garmentAmount, garmentCostPerItem: garment.garmentCostPerItem, garmentTotalCost: garment.garmentTotalCost
      });
    }
    else {
      Other.updateOne({ designID: other.designID }, {
        otherJobDescription: other.otherJobDescription, otherAmount: other.otherAmount,
        otherCostPerItem: other.otherCostPerItem, otherTotalCost: other.otherTotalCost
      });
    }
    design = await design.save();
    await Design.updateOne({ designID: design.designID }, {
      designType: design.designType, designDescription: design.designDescription,
      designNotes: design.designNotes, designImages: design.designImages, designTotalCost: design.designTotalCost
    });
  }
}

app.post('/orderSubmit', async function (req, res) {
  var order = new Order(req.body);
  var design = new Design(req.body);
  var customer = new Customer(req.body);

  try {
    saveOrder(order, design, customer);
    // res.json(order.orderID)
  } catch (error) {
    console.log(error)
  }

});

app.post('/designSubmit', async function (req, res) {
  var design = new Design(req.body);
  var garment = new Garment(req.body);
  var other = new Other(req.body);

  try {
    saveDesign(design, garment, other);
    res.json(order.orderID)
  } catch (error) {
    console.log(error)
  }

});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
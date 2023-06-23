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

app.post('/orderSubmit', function (req, res) {

  var order = new Order(req.body);
  var design = new Design(req.body);
  var customer = new Customer(req.body);

  //Search if this order exists in the database
  Order.findOne({ orderID: order.orderID }, function (err, result) {
    if (!result) {
      console.log("++++++++++++++++++++++++++++++++++++++++++No Match")

      //Save new Customer
      customer.save()
        .then(customer => {
          console.log(customer)
        })
        .catch(e => {
          console.log(e)
        })

      //Save new Order
      order.save()
        .then(order => {
          console.log(order)
        })
        .catch(e => {
          console.log(e)
        })

      //Save new Design
      design.save()
        .then(design => {
          console.log(design)
        })
        .catch(e => {
          console.log(e)
        })
    }
    else {
      console.log("------------------------------------------Match!")

      // Manually set the fields to update for now
      Order.updateOne({ order_id: order.order_id }, { "$set": { taxExemption: order.taxExemption, requestedDeliveryDate: order.requestedDeliveryDate } })
        .then(order => {
          console.log(order)
        })

    }
  });

  // Go back to Home
  res.redirect('/');

});

app.post('/designSubmit', function (req, res) {

  var design = new Design(req.body);
  var garment = new Garment(req.body);
  var other = new Other(req.body);

  //Search if this design exists in the database
  // Use designID for testing, but orderID for functionality
  Design.findOne({ designID: design.designID }, function (err, result) {
    if (!result) {
      console.log("++++++++++++++++++++++++++++++++++++++++++No Match")

      //Saved as a new design
      design.save()
        .then(design => {
          console.log(design)
        })
        .catch(e => {
          console.log(e)
        })

      Design.findOne({ designID: design.designID, designType: 'Garment' }, function (err, result) {
        if (!result) {
          //Saved as a new Other
          other.save()
            .then(other => {
              console.log(other)
            })
            .catch(e => {
              console.log(e)
            })
        }
        else {
          //Saved as a new Garment
          garment.save()
            .then(garment => {
              console.log(garment)
            })
            .catch(e => {
              console.log(e)
            })
        }
      });
    }
    else {
      console.log("------------------------------------------Match!")
      //Update the design
      // Manually set the fields to update for now
      Design.updateOne({ designID: design.designID }, {
        "$set": {
          designType: design.designType, designDescription: design.designDescription,
          designNotes: design.designNotes, designImages: design.designImages, designTotalCost: design.designTotalCost
        }
      })
        .then(design => {
          console.log(design)
        })

      //Determine if its a Garment or Other and save appropriately
      Design.findOne({ designID: design.designID, designType: 'Garment' }, function (err, result) {
        if (!result) {
          //Update the Other
          Other.updateOne({ designID: other.designID }, {
            "$set": {
              otherJobDescription: other.otherJobDescription, otherAmount: other.otherAmount,
              otherCostPerItem: other.otherCostPerItem, otherTotalCost: other.otherTotalCost
            }
          })
            .then(other => {
              console.log(other)
            })
        }
        else {
          //Update the Garment
          Garment.updateOne({ designID: garment.designID }, {
            "$set": {
              garmentGender: garment.garmentGender, garmentSize: garment.garmentSize, garmentStyleNumber: garment.garmentStyleNumber,
              garmentAmount: garment.garmentAmount, garmentCostPerItem: garment.garmentCostPerItem, garmentTotalCost: garment.garmentTotalCost
            }
          })
            .then(garment => {
              console.log(garment)
            })
        }
      });
    }
    //Go back to Home
    res.redirect('/');

  });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
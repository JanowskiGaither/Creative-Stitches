const express = require('express');
const mongoose = require('mongoose');
const Order = require('./models/order');
const Customer = require('./models/customer');
const Design = require('./models/design');
const Garment = require('./models/garment');
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
  Order.findOne({orderID: order.orderID }, function(err, result){
    if (!result){
      console.log("++++++++++++++++++++++++++++++++++++++++++No Match")

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

      //Not checking for existing Customer yet so just create duplicates
      customer.save()
      .then(customer => {
        console.log(customer)
      })
      .catch(e => {
          console.log(e)
      })
    }
    else
    {
      console.log("------------------------------------------Match!")

      

      let updateOrder = Order.findOneAndUpdate ({orderID: order.orderID }, order, );
      let updateCustomer = Customer.findOneAndUpdate ({orderID: order.orderID }, customer, );

/*

    //Update Order
          order.updateOne({ "_id":result._id }, order)
          .then(order => {
            console.log(order)
          })
          .catch(e => {
              console.log(e)
          })

      //Update Customer
      order.updateOne({ "_id":result._id }, order)
      .then(order => {
        console.log(order)
      })
      .catch(e => {
          console.log(e)
      })
      */
      
    }
  });

  res.redirect('/');

});

app.post('/designSubmit', function (req, res) {

  var order = new Order(req.body);
  var design = new Design(req.body);

  //Search if this order exists in the database
  var result = Order.find({orderID: order.orderID});

  if (!result.length){
    console.log("++++++++++++++++++++++++++++++++++++++++++No Match")
  }
  else
  {
    console.log("------------------------------------------Match!")
  }

  //Check results
  //if (!result.length){
    //Save as a new order
    order.save()
    .then(order => {
      console.log(order)
    })
    .catch(e => {
        console.log(e)
    })

    design.save()
    .then(order => {
      console.log(design)
    })
    .catch(e => {
        console.log(e)
    })

  res.redirect('/');
  //}
  //else {
  //  mongoose.db.orders.update({ "_id":result._id }, order)
  //    .then(order => {
  //      console.log(order)
  //    })
  //    .catch(e => {
  //        console.log(e)
  //    })
  //}
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
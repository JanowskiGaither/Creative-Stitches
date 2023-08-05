import '../scss/orderStyles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import * as stitchesReadSave from '../../Library/stitchesReadSave'
import * as stitchesIDs from '../../Library/stitchesIDs'
import * as stichesClass from '../../Library/stichesClass.js'

//Define variables
let submitbutton = document.getElementById("submitButton");
let orderForm = document.getElementById("orderForm");
let customerID = document.getElementById("customerID");
let orderID = document.getElementById("orderID");

//Handle edit orders
var editOrder;

//Create first IDs
customerID.value = document.getElementById("firstName").value.toString() + document.getElementById("lastName").value.toString() + "_" + document.getElementById("email").value.toString();
orderID.value = customerID + new Date().toLocaleDateString();

function initialSetup() {

    //Retrieve editOrder
    if (sessionStorage.getItem('editOrder') != null) {
        editOrder = sessionStorage.getItem('editOrder');
    }
    else {
        //For now just substitude value, later update popup error maybe
        orderValues.editOrder = 'NA'
    }

    if (editOrder == true) {
        editOrder = false;
        sessionStorage.editOrder = orderValues.editOrder;
        orderID = sessionStorage.getItem('orderID');
        stitchesReadSave.readOrder();
    }
}

//Create event Listeners

// Update the Customer ID based on changes in the form
document.getElementById("firstName").addEventListener('change', function () {
    [customerID.value, orderID.value] = stitchesIDs.createID();
});

document.getElementById("lastName").addEventListener('change', function () {
    [customerID.value, orderID.value] = stitchesIDs.createID();
});

document.getElementById("email").addEventListener('change', function () {
    [customerID.value, orderID.value] = stitchesIDs.createID();
});

// Submit form values and move to the design page
submitbutton.addEventListener('click', async function () {
    //Save the Customer and Order values
    var currentOrder = new stichesClass.Order(true);
    console.log(currentOrder);
    var currentCustomer = new stichesClass.Customer(true);
    console.log(currentCustomer);
    stitchesReadSave.saveCustomer(currentCustomer);
    stitchesReadSave.saveOrder(currentOrder);

    //Redirct to design
    window.location.href = '/design';
})

//Prevent enter from submitting form
orderForm.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
    }
})

// Wait for the page to fully load, then run initial setup for the page
document.addEventListener("DOMContentLoaded", async function () {
    initialSetup();
});

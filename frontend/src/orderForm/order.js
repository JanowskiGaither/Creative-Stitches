import '../scss/styles.scss';
import '../scss/orderFormStyles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import * as stitchesReadSave from '../Library/stitchesReadSave.js';
import * as stitchesIDs from '../Library/stitchesIDs';
import * as stichesClass from '../Library/stichesClass.js';
import * as stitchesFetchGet from '../Library/stitchesFetchGet';

//Define variables
var editOrder;

// Get elements from webpage
let submitbutton = document.getElementById("submitButton");
let orderForm = document.getElementById("orderForm");
let customerID = document.getElementById("customerID");
let orderID = document.getElementById("orderID");

// Set the initial page values
function initialSetup() {

    //Retrieve editOrder
    if (sessionStorage.getItem('editOrder') != null) {
        editOrder = sessionStorage.getItem('editOrder');
    }
    else {
        orderValues.editOrder = 'NA'
    }

    if (editOrder == true) {
        // Turn of editOrder flag
        editOrder = false;
        sessionStorage.editOrder = orderValues.editOrder;

        // Get the orderID and customerID
        orderID = sessionStorage.getItem('orderID');
        customerID = sessionStorage.getItem('customerID');

        //Fetch the order and customer from mongoDB
        var result = stitchesFetchGet.readOrder();
        console.log(result);
    }
    else {
        //Create first IDs
        [customerID.value, orderID.value] = stitchesIDs.createID();
    }
}

//Create event Listeners
{
    document.getElementById("firstName").addEventListener('change', function () {
        // Update the Customer and Order ID based on changes in the form
        [customerID.value, orderID.value] = stitchesIDs.createID();
    });

    document.getElementById("lastName").addEventListener('change', function () {
        // Update the Customer and Order ID based on changes in the form
        [customerID.value, orderID.value] = stitchesIDs.createID();
    });

    document.getElementById("email").addEventListener('change', function () {
        // Update the Customer and Order ID based on changes in the form
        [customerID.value, orderID.value] = stitchesIDs.createID();
    });

    submitbutton.addEventListener('click', async function () {
        // Submit form values and move to the design page
        stitchesIDs.storeIDs();

        // Get the Customer and Order values from this form
        var currentOrder = new stichesClass.Order(true);
        var currentCustomer = new stichesClass.Customer(true);

        //Save them with MongoDB
        stitchesFetchGet.saveCustomer(currentCustomer);
        stitchesFetchGet.saveOrder(currentOrder);

        //Redirect to design
        window.location.href = '/design';
    })

    orderForm.addEventListener('keypress', function (e) {
        //Prevent enter from submitting form
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    })

    document.addEventListener("DOMContentLoaded", async function () {
        // Wait for the page to fully load, then run initial setup for the page
        initialSetup();
    });
}
import '../scss/orderStyles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Create Order Class
class Order {
    orderID = 0;
    customerID = "";
    orderDescription = "";
    orderDate = "";
    requestedDeliveryDate = "";
    scheduledDeliveryDate = "";
    taxExemption = "";
    totalItems = "";
    totalMaterialCost = "";
    totalTaxes = "";
    totalProfit = "";
    totalSale = "";
    constructor(getFormValues) {
        if (getFormValues) {
            this.orderID = orderID;
            this.customerID = customerID;
            this.requestedDeliveryDate = document.getElementById("requestedDeliveryDate").value;
            this.taxExemption = document.getElementById("taxExemption").value;
        }
    }
}

class Customer {
    customerID = 0;
    firstName = "";
    lastName = "";
    organization = "";
    phone = "";
    email = "";
    constructor(getFormValues) {
        if (getFormValues) {
            this.customerID = customerID;
            this.firstName = document.getElementById("firstName").value;
            this.lastName = document.getElementById("lastName").value;
            this.Organization = document.getElementById("organization").value;
            this.email = document.getElementById("email").value;
            this.phone = document.getElementById("phone").value;
        }
    }
}

let submitbutton = document.getElementById("submitButton");
let org = document.getElementById("organization");

//Create first IDs
var customerID = document.getElementById("firstName").value.toString() + document.getElementById("lastName").value.toString() + "_" + document.getElementById("email").value.toString();
var orderID = customerID + new Date().toLocaleDateString();

function createID() {
    customerID = document.getElementById("firstName").value.toString() + document.getElementById("lastName").value.toString() + "_" + document.getElementById("email").value.toString();
    orderID = customerID + "_" + new Date().toLocaleDateString();

    console.log(orderID);

    //Update stored orderID
    storeOrderID();
}


async function readOrder() {
    await fetch('/readOrder', {
        methods: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
        .then(response => response.json())
        .then(response => console.log(response))
        .finally(() => {
            org.setAttribute("placeholder", "it worked")
        })

}

async function saveOrder() {
    //Save current order values from HTML
    var currentOrder = new Order(true);

    await fetch('/orderSubmit', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(currentOrder)
    }).then(response => { return response })

}

async function saveCustomer() {
    //Save current customer values from HTML
    var currentCustomer = new Customer(true);

    await fetch('/customerSubmit', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(currentCustomer)
    }).then(response => { return response })
}


function storeOrderID() {
    sessionStorage.orderID = orderID
}

document.getElementById("firstName").addEventListener('change', function () {
    createID();
});

document.getElementById("lastName").addEventListener('change', function () {
    createID();
});

document.getElementById("email").addEventListener('change', function () {
    createID();
});

submitbutton.addEventListener('click', async function () {
    await saveCustomer();
    saveOrder();
})
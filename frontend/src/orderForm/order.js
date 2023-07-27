import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

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
    await readOrder();
})
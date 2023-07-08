import '../scss/orderStyles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

let orderID = document.getElementById("orderID");

orderID.addEventListener('change', function () {
    storeOrderID();
});

function storeOrderID(message) {
    // console.log('storeOrderID Action');
    sessionStorage.orderID = document.getElementById('orderID').value

    // console.log(sessionStorage.orderID);
}
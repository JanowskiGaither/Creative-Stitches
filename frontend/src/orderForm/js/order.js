import '../scss/orderStyles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

let orderID = document.getElementById("orderID");

orderID.addEventListener('change', function () {
    storeOrderID();
});

function storeOrderID(message) {
    sessionStorage.orderID = document.getElementById('orderID').value
}
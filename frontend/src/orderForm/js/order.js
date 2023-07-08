import '../scss/orderStyles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

let submitbutton = document.getElementById("submitButton");

nextGarmentbutton.addEventListener('click', function () {
    storeOrderID();
});

function storeOrderID(message) {
    sessionStorage.orderID = document.getElementById('orderID').value
}
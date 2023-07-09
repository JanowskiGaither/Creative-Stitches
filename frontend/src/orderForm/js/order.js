import '../scss/orderStyles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

let orderID = document.getElementById("orderID");
let submitbutton = document.getElementById("submitButton");
let org = document.getElementById("organization");

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

function storeOrderID(message) {
    sessionStorage.orderID = document.getElementById('orderID').value
}

orderID.addEventListener('change', function () {
    storeOrderID();
});


submitbutton.addEventListener('click', async function () {
    await readOrder();
})
import '../scss/orderStyles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

let submitbutton = document.getElementById("submitButton");

async function readOrder() {
    await fetch('/readOrder', {
        methods: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(response => console.log(response))
}

submitbutton.addEventListener('click', async function () {
    await readOrder();
})
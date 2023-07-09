import '../scss/orderStyles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

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

submitbutton.addEventListener('click', async function () {
    await readOrder();
})
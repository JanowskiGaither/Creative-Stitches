import '../scss/page2styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const fs = require("fs");


let importButton = document.getElementById("importButton");

importButton.addEventListener('click', async function () {
    importFile();
})

async function importFile() {
    fs.readFile("/assets/import.csv", "utf8", function (err, data) {
        console.log(data);
    });

}
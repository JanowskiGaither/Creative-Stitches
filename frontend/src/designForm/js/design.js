import '../scss/designStyles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'



let message = "hello from design.js!";
let resetbutton = document.getElementById("resetButton");
let previousGarmentbutton = document.getElementById("previousGarment");
let nextGarmentbutton = document.getElementById("nextGarment");
let selectItemType = document.getElementById("item_type");

function initialHide() {
    let hiddenItemType = document.getElementById("show_other");
    hiddenItemType.style.display = "none";
}

function hideDiv() {
    var typeSelected = selectItemType.options[selectItemType.selectedIndex].text;

    if (typeSelected == "Garment") {
        document.getElementById('show_garment').style.display = "block";
        document.getElementById('show_other').style.display = "none";
    }
    else {
        document.getElementById('show_garment').style.display = 'none';
        document.getElementById('show_other').style.display = "block";
    }
}

function sayHello(message) {
    console.log(message);
}


document.addEventListener("DOMContentLoaded", function () {
    initialHide();
});

selectItemType.addEventListener("change", function () {
    hideDiv();
});

resetbutton.addEventListener('click', function () {
    sayHello(message);
});

previousGarmentbutton.addEventListener('click', function () {

});

nextGarmentbutton.addEventListener('click', function () {

});
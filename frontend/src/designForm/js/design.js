import '../scss/designStyles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'



let message = "hello from design.js!";
let resetbutton = document.getElementById("resetButton");
let previousGarmentbutton = document.getElementById("previousGarment");
let nextGarmentbutton = document.getElementById("nextGarment");
let selectItemType = document.getElementById("designType");

function initialHide() {
    let hiddenItemType = document.getElementById("showOther");
    hiddenItemType.style.display = "none";
}

function hideDiv() {
    var typeSelected = selectItemType.options[selectItemType.selectedIndex].text;

    if (typeSelected == "Garment") {
        document.getElementById('showGarment').style.display = "block";
        document.getElementById('showOther').style.display = "none";
    }
    else {
        document.getElementById('showGarment').style.display = 'none';
        document.getElementById('showOther').style.display = "block";
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
import '../scss/designStyles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'



let message = "hello from design.js!";
let resetbutton = document.getElementById("resetButton");
let previousGarmentbutton = document.getElementById("previousGarment");
let nextGarmentbutton = document.getElementById("nextGarment");
let garmentAmount = document.getElementById("garmentAmount");
let garmentCostPerItem = document.getElementById("garmentCostPerItem");
let otherAmount = document.getElementById("otherAmount");
let otherCostPerItem = document.getElementById("otherCostPerItem");
let selectItemType = document.getElementById("designType");

function initialSetup() {
    // Hide Other initially
    let hiddenItemType = document.getElementById("showOther");
    hiddenItemType.style.display = "none";

    // Calculate total costs at start
    var otherTotal = document.getElementById('otherAmount').value * document.getElementById('otherCostPerItem').value;
    document.getElementById('otherTotalCost').value = otherTotal;

    var garmentTotal = document.getElementById('garmentAmount').value * document.getElementById('garmentCostPerItem').value;
    document.getElementById('garmentTotalCost').value = garmentTotal;

    //Assign initial GarmentID and OtherID to 1
    document.getElementById('garmentID').value = 1;

}

function itemTypeSelection() {
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

function calculateOtherTotal() {
    var otherTotal = document.getElementById('otherAmount').value * document.getElementById('otherCostPerItem').value;
    document.getElementById('otherTotalCost').value = otherTotal;
}

function calculateGarmentTotal() {
    var garmentTotal = document.getElementById('garmentAmount').value * document.getElementById('garmentCostPerItem').value;
    document.getElementById('garmentTotalCost').value = garmentTotal;
}


document.addEventListener("DOMContentLoaded", function () {
    initialSetup();
});

selectItemType.addEventListener("change", function () {
    itemTypeSelection();
});

garmentAmount.addEventListener("change", function () {
    calculateGarmentTotal();
});

garmentCostPerItem.addEventListener("change", function () {
    calculateGarmentTotal();
});

otherAmount.addEventListener("change", function () {
    calculateOtherTotal();
});

otherCostPerItem.addEventListener("change", function () {
    calculateOtherTotal();
});


resetbutton.addEventListener('click', function () {
    sayHello(message);
});

previousGarmentbutton.addEventListener('click', function () {

});

nextGarmentbutton.addEventListener('click', function () {

});
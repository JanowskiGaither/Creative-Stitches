import '../scss/designStyles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Create Garment Class
class Garment {
    designID;
    orderID;
    garmentID;
    garmentGender;
    garmentSize;
    garmentStyleNumber;
    garmentAmount;
    garmentCostPerItem;
    garmentTotalCost;
    constructor() {

    }
}

// Link commonly used variables from HTML
let previousGarmentbutton = document.getElementById("previousGarment");
let nextGarmentbutton = document.getElementById("nextGarment");
let selectItemType = document.getElementById("designType");
let orderID = document.getElementById("orderID");


function initialSetup() {
    // Hide Other initially
    let hiddenItemType = document.getElementById("showOther");
    hiddenItemType.style.display = "none";

    //Retrieve orderID - Not currently working
    orderID.value = sessionStorage.getItem('orderID');
    // console.log(sessionStorage.getItem('orderID'));

    // Calculate total costs at start
    var otherTotal = document.getElementById("otherAmount").value * document.getElementById("otherCostPerItem").value;
    document.getElementById("otherTotalCost").value = otherTotal;

    var garmentTotal = document.getElementById("garmentAmount").value * document.getElementById("garmentCostPerItem").value;
    document.getElementById("garmentTotalCost").value = garmentTotal;

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

// Update Other Total Cost after user input
function calculateOtherTotal() {
    var otherTotal = document.getElementById('otherAmount').value * document.getElementById('otherCostPerItem').value;
    document.getElementById("otherTotalCost").value = otherTotal;
}

// Update Garment Total Cost after user input
function calculateGarmentTotal() {
    var garmentTotal = document.getElementById('garmentAmount').value * document.getElementById('garmentCostPerItem').value;
    document.getElementById("garmentTotalCost").value = garmentTotal;
}

// Save the current garment and retrieve the next garment's values to display
async function nextGarment() {
    // "/designSubmit" method="post"

    //Retreive current garment values from HTML
    currentGarment = new Garment();
    currentGarment.designID = document.getElementById("designID").value;
    currentGarment.orderID = document.getElementById("orderID").value;
    currentGarment.garmentID = document.getElementById("garmentID").value;
    currentGarment.garmentGender = document.getElementById("garmentGender").value;
    currentGarment.garmentSize = document.getElementById("garmentSize").value;
    currentGarment.garmentStyleNumber = document.getElementById("garmentStyleNumber").value;
    currentGarment.garmentAmount = document.getElementById("garmentAmount").value;
    currentGarment.garmentCostPerItem = document.getElementById("garmentCostPerItem").value;
    currentGarment.garmentTotalCost = document.getElementById("garmentTotalCost").value;

    fetch('/designSubmit', {
        method: 'POST',
        body: JSON.currentGarment
    })
        .then(response => response.json())
        .then(response => console.log(JSON.response))
}

// Create event listeners to handle user inputs

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

previousGarmentbutton.addEventListener('click', function () {
    console.log(sessionStorage.getItem('orderID'));
});

nextGarmentbutton.addEventListener('click', function () {
    nextGarment();
});
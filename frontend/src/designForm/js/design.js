import '../scss/designStyles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Create Garment Class
class Garment {
    designID = 0;
    orderID = 0;
    garmentID = 0;
    garmentGender = 0;
    garmentSize = 0;
    garmentStyleNumber = 0;
    garmentAmount = 0;
    garmentCostPerItem = 0;
    garmentTotalCost = 0;
    constructor(getFormValues) {
        if (getFormValues) {
            this.designID = designID;
            this.orderID = orderID;
            this.garmentID = garmentID;
            this.garmentGender = document.getElementById("garmentGender").value;
            this.garmentSize = document.getElementById("garmentSize").value;
            this.garmentStyleNumber = document.getElementById("garmentStyleNumber").value;
            this.garmentAmount = document.getElementById("garmentAmount").value;
            this.garmentCostPerItem = document.getElementById("garmentCostPerItem").value;
            this.garmentTotalCost = document.getElementById("garmentTotalCost").value;
        }
    }
}

// Link commonly used variables from HTML
let previousGarmentbutton = document.getElementById("previousGarment");
let nextGarmentbutton = document.getElementById("nextGarment");
let selectItemType = document.getElementById("designType");
let numberOfDesigns = document.getElementById("numberOfDesigns");
let numberOfGarments = document.getElementById("numberOfGarments");

//Retrieve orderID
const orderID = sessionStorage.getItem('orderID');

//Create first designID
var designNumber = 1;
var garmentNumber = 1;
var designID = orderID.toString() + '_' + designNumber.toString();
var garmentID = designID.toString() + '_' + garmentNumber.toString();



function initialSetup() {
    // Hide Other initially
    let hiddenItemType = document.getElementById("showOther");
    hiddenItemType.style.display = "none";

    //Update current design and garment
    determineCurrentDesign()
    determineCurrentGarment()

    // Calculate total costs at start
    var otherTotal = document.getElementById("otherAmount").value * document.getElementById("otherCostPerItem").value;
    document.getElementById("otherTotalCost").value = otherTotal;

    var garmentTotal = document.getElementById("garmentAmount").value * document.getElementById("garmentCostPerItem").value;
    document.getElementById("garmentTotalCost").value = garmentTotal;
}

function determineCurrentDesign() {
    document.getElementById("currentDesign").innerText = "Design " + designNumber.toString() + " of " + numberOfDesigns.value.toString();
}

function determineCurrentGarment() {
    document.getElementById("currentGarment").innerText = "Garment " + garmentNumber.toString() + " of " + numberOfGarments.value.toString();
}

function itemTypeSelection() {
    var typeSelected = selectItemType.options[selectItemType.selectedIndex].text;

    if (typeSelected == "Garment") {
        document.getElementById('showGarment').style.display = "block";
        document.getElementById('showNumberOfGarment').style.display = "block";
        document.getElementById('showOther').style.display = "none";

    }
    else {
        document.getElementById('showGarment').style.display = 'none';
        document.getElementById('showNumberOfGarment').style.display = "none";
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
    //Retreive current garment values from HTML
    var currentGarment = new Garment(true);

    //Setup new garment query
    var newGarment = new Garment();
    newGarment.garmentID = designID.toString() + '_' + ((parseInt(garmentNumber, 10)) + 1).toString();
    newGarment.orderID = orderID;
    newGarment.designID = designID;

    fetch('/garmentSubmit', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(currentGarment)
    }).then(response => { return response })

    const response = await fetch('/garmentRetrieve', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(newGarment)
    }).then(response => { return response })

    //Parse response to update values
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    garmentNumber = ((parseInt(garmentNumber, 10)) + 1);
    garmentID = jsonResponse.garmentID;
    document.getElementById("garmentGender").value = jsonResponse.garmentGender;
    document.getElementById("garmentSize").value = jsonResponse.garmentSize;
    document.getElementById("garmentStyleNumber").value = jsonResponse.garmentStyleNumber;
    document.getElementById("garmentAmount").value = jsonResponse.garmentAmount;
    document.getElementById("garmentCostPerItem").value = jsonResponse.garmentCostPerItem;
    document.getElementById("garmentTotalCost").value = jsonResponse.garmentTotalCost;
    document.getElementById("garmentTotalCost").value = jsonResponse.garmentTotalCost;

    determineCurrentGarment();
}


// Save the current garment and retrieve the next garment's values to display
async function previousGarment() {
    //Retreive current garment values from HTML
    var currentGarment = new Garment(true);

    //Setup new garment query
    var newGarment = new Garment();
    newGarment.garmentID = designID.toString() + '_' + ((parseInt(garmentNumber, 10)) - 1).toString();
    newGarment.orderID = orderID;
    newGarment.designID = designID;

    fetch('/garmentSubmit', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(currentGarment)
    }).then(response => { return response })

    const response = await fetch('/garmentRetrieve', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(newGarment)
    }).then(response => { return response })

    //Parse response to update values
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    garmentNumber = ((parseInt(garmentNumber, 10)) - 1);
    garmentID = jsonResponse.garmentID;
    document.getElementById("garmentGender").value = jsonResponse.garmentGender;
    document.getElementById("garmentSize").value = jsonResponse.garmentSize;
    document.getElementById("garmentStyleNumber").value = jsonResponse.garmentStyleNumber;
    document.getElementById("garmentAmount").value = jsonResponse.garmentAmount;
    document.getElementById("garmentCostPerItem").value = jsonResponse.garmentCostPerItem;
    document.getElementById("garmentTotalCost").value = jsonResponse.garmentTotalCost;

    determineCurrentGarment();
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

numberOfDesigns.addEventListener("change", function () {
    determineCurrentDesign();
});

numberOfGarments.addEventListener("change", function () {
    determineCurrentGarment();
});

// designNumber.addEventListener("change", function () {
//     determineCurrentDesign();
// });

// garmentNumber.addEventListener("change", function () {
//     determineCurrentGarment();
// });

otherCostPerItem.addEventListener("change", function () {
    calculateOtherTotal();
});

previousGarmentbutton.addEventListener('click', async function () {
    previousGarment();
});

nextGarmentbutton.addEventListener('click', async function () {
    nextGarment();
});
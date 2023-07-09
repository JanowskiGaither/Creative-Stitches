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
let previousGarmentButton = document.getElementById("previousGarment");
let nextGarmentButton = document.getElementById("nextGarment");
let previousDesignButtonTop = document.getElementById("previousDesignTop");
let nextDesignButtonTop = document.getElementById("nextDesignTop");
let previousDesignBottom = document.getElementById("previousDesignBottom");
let nextDesignBottom = document.getElementById("nextDesignBottom");
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
    // Hide unselected initially
    document.getElementById('showOther').style.display = "none";
    document.getElementById('showEmbroidery').style.display = "none";
    document.getElementById('showVinylize').style.display = "none";

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

function checkNextPreviousDesignShown() {
    // If its the final design show submit
    if (document.getElementById("currentDesign").value == numberOfDesigns.value) {
        document.getElementById('submitButton').style.display = "block";
        document.getElementById('nextDesignTop').style.display = "none";
        document.getElementById('nextDesignBottom').style.display = "none";
    }
    // Hide submit and show next design button
    else {
        document.getElementById('submitButton').style.display = "none";
        document.getElementById('nextDesignTop').style.display = "block";
        document.getElementById('nextDesignBottom').style.display = "block";
    }

    // If its the first design don't show previous button
    if (document.getElementById("currentDesign").value == 1) {
        document.getElementById('previousDesignTop').style.display = "none";
        document.getElementById('previousDesignBottom').style.display = "none";
    }
    // Show previous button
    else {
        document.getElementById('previousDesignTop').style.display = "block";
        document.getElementById('previousDesignBottom').style.display = "block";
    }
}

function itemTypeSelection() {
    var typeSelected = selectItemType.options[selectItemType.selectedIndex].text;

    // Show Garment related divs, hide the rest
    if (typeSelected == "Garment") {
        document.getElementById('showGarment').style.display = "block";
        document.getElementById('showNumberOfGarment').style.display = "block";
        document.getElementById('showOther').style.display = "none";
        document.getElementById('showEmbroidery').style.display = "none";
        document.getElementById('showVinylize').style.display = "none";

    }
    // Show Embroidery related divs, hide the rest
    else if (typeSelected == "Embroidery") {
        document.getElementById('showGarment').style.display = "none";
        document.getElementById('showNumberOfGarment').style.display = "none";
        document.getElementById('showOther').style.display = "none";
        document.getElementById('showEmbroidery').style.display = "block";
        document.getElementById('showVinylize').style.display = "none";
    }
    // Show Vinylize related divs, hide the rest
    else if (typeSelected == "Vinylize") {
        document.getElementById('showGarment').style.display = "none";
        document.getElementById('showNumberOfGarment').style.display = "none";
        document.getElementById('showOther').style.display = "none";
        document.getElementById('showEmbroidery').style.display = "none";
        document.getElementById('showVinylize').style.display = "block";
    }
    // Show Embroidery related divs, hide rest
    else if (typeSelected == "Other") {
        document.getElementById('showGarment').style.display = "none";
        document.getElementById('showNumberOfGarment').style.display = "none";
        document.getElementById('showOther').style.display = "block";
        document.getElementById('showEmbroidery').style.display = "none";
        document.getElementById('showVinylize').style.display = "none";
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

// Update Embroidery Total Cost after user input
function calculateEmbroideryTotal() {
    var garmentTotal = document.getElementById('embroideryAmount').value * document.getElementById('embroideryCostPerItem').value;
    document.getElementById("embroideryTotalCost").value = garmentTotal;
}

// Update Vinylize Total Cost after user input
function calculateVinylizeTotal() {
    var garmentTotal = document.getElementById('vinylizeAmount').value * document.getElementById('vinylizeCostPerItem').value;
    document.getElementById("vinylizeTotalCost").value = garmentTotal;
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

document.getElementById('vinylizeAmount').value.addEventListener("change", function () {
    calculateVinylizeTotal();
});

document.getElementById('vinylizeCostPerItem').value.addEventListener("change", function () {
    calculateVinylizeTotal();
});

document.getElementById('embroideryAmount').value.addEventListener("change", function () {
    calculateEmbroideryTotal();
});

document.getElementById('embroideryCostPerItem').value.addEventListener("change", function () {
    calculateEmbroideryTotal();
});

document.getElementById('otherCostPerItem').value.addEventListener("change", function () {
    calculateOtherTotal();
});

document.getElementById('otherAmount').value.addEventListener("change", function () {
    calculateOtherTotal();
});

numberOfDesigns.addEventListener("change", function () {
    determineCurrentDesign();
});

numberOfGarments.addEventListener("change", function () {
    determineCurrentGarment();
});

previousGarmentButton.addEventListener('click', async function () {
    previousGarment();
});

nextGarmentButton.addEventListener('click', async function () {
    nextGarment();
});

previousDesignButtonTop.addEventListener('click', async function () {
    previousGarment();
});

nextDesignButtonTop.addEventListener('click', async function () {
    nextGarment();
});

previousDesignButtonBottom.addEventListener('click', async function () {
    previousGarment();
});

nextDesignButtonBottom.addEventListener('click', async function () {
    nextGarment();
});
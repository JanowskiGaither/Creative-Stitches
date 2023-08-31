import '../scss/designFormStyles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import * as stitchesReadSave from '../Library/stitchesReadSave.js'
import * as stitchesIDs from '../Library/stitchesIDs'
import * as stichesCalculations from '../Library/stitchesCalculations'

//Define variables
var editOrder = false;
var editType = false;

// Get elements from webpage
let previousDesignButtonTop = document.getElementById("previousDesignTop");
let nextDesignButtonTop = document.getElementById("nextDesignTop");
let previousDesignButtonBottom = document.getElementById("previousDesignBottom");
let nextDesignButtonBottom = document.getElementById("nextDesignBottom");
let reviewButton = document.getElementById("reviewButton");
let selectItemType = document.getElementById("designType");
let designForm = document.getElementById('designForm');
let addGarmentButton = document.getElementById('addGarment');
let saveGarmentButton = document.getElementById('saveGarment');
let designID = document.getElementById('designID');
let garmentID = document.getElementById('garmentID');
let designNumber = document.getElementById('designNumber');
let numberOfDesigns = document.getElementById('numberOfDesigns');

// Set the initial page values 
async function initialSetup() {

    //Check if we're returning to edit something
    if (sessionStorage.getItem('editOrder') !== null && sessionStorage.getItem('editOrder') !== undefined) {
        editOrder = sessionStorage.getItem('editOrder');

        //Check what's being edited
        if (sessionStorage.getItem('editType') !== null && sessionStorage.getItem('editType') !== undefined) {
            editType = sessionStorage.getItem('editType');
        }
    }
    else {
        //For now just substitude value, later update popup error maybe
        editOrder = 'NA'
    }

    //Try and retrieve all stored IDs
    stitchesIDs.retrieveIDs();

    //If we're editing an order load the target and set the focus
    if (editOrder == true) {
        //Load Design

        if (editType == "garment") {
            //Update the garment table


            //Load Garment and set focus

        }
        else if (editType == "embroidery") {
            //Load Embroidery and set focus
        }
        else if (editType == "vinylize") {
            //Load Vinylize and set focus
        }
        else if (editType == "other") {
            //Load Other and set focus
        }
    }
    else {
        //Create the designID and GarmentID
        designID.value = stitchesIDs.createDesignID();
        garmentID.value = stitchesIDs.createGarmentID();

        //Populate the first design if possible
        await stitchesReadSave.getCurrentDesign();
        stitchesReadSave.updateGarmentTable();
    }

    // Hide unselected initially
    itemTypeSelection();

    //Update current design and garment
    stitchesIDs.determineCurrentDesign();
    stitchesIDs.determineCurrentGarment();

    //Update design forward/backward buttons
    checkNextPreviousDesignShown();

    // Calculate total costs at start
    stichesCalculations.calculateGarmentTotal();
    stichesCalculations.calculateOtherTotal();
    stichesCalculations.calculateVinylizeTotal();
    stichesCalculations.calculateEmbroideryTotal();
}

// Show or hide previous and next design buttons based on current design number vs total design numbers
function checkNextPreviousDesignShown() {
    // If its the final design show submit
    if (designNumber.value == numberOfDesigns.value) {
        console.log("designNumber == numberOfDesigns");
        reviewButton.style.display = "block";
        nextDesignButtonTop.style.display = "none";
        nextDesignButtonBottom.style.display = "none";
    }
    // Hide submit and show next design button
    else {
        console.log("designNumber != numberOfDesigns");
        reviewButton.style.display = "none";
        nextDesignButtonTop.style.display = "block";
        nextDesignButtonBottom.style.display = "block";
    }

    // If its the first design don't show previous button
    if (designNumber.value == 1) {
        console.log("designNumber == 1");
        previousDesignButtonTop.style.display = "none";
        previousDesignButtonBottom.style.display = "none";
    }
    // Show previous button
    else {
        console.log("designNumber == 1");
        previousDesignButtonTop.style.display = "block";
        previousDesignButtonBottom.style.display = "block";
    }
}

// Show or hard fields based on Design Type
function itemTypeSelection() {
    var typeSelected = selectItemType.options[selectItemType.selectedIndex].text;

    // Show Garment related divs, hide the rest
    if (typeSelected == "Garment") {
        document.getElementById('showGarment').style.display = "block";
        document.getElementById('showOther').style.display = "none";
        document.getElementById('showEmbroidery').style.display = "none";
        document.getElementById('showVinylize').style.display = "none";

    }
    // Show Embroidery related divs, hide the rest
    else if (typeSelected == "Embroidery") {
        document.getElementById('showGarment').style.display = "none";
        document.getElementById('showOther').style.display = "none";
        document.getElementById('showEmbroidery').style.display = "block";
        document.getElementById('showVinylize').style.display = "none";
    }
    // Show Vinylize related divs, hide the rest
    else if (typeSelected == "Vinylize") {
        document.getElementById('showGarment').style.display = "none";
        document.getElementById('showOther').style.display = "none";
        document.getElementById('showEmbroidery').style.display = "none";
        document.getElementById('showVinylize').style.display = "block";
    }
    // Show Embroidery related divs, hide rest
    else if (typeSelected == "Other") {
        document.getElementById('showGarment').style.display = "none";
        document.getElementById('showOther').style.display = "block";
        document.getElementById('showEmbroidery').style.display = "none";
        document.getElementById('showVinylize').style.display = "none";
    }
}

// Create event listeners to handle user inputs
{
    document.addEventListener("DOMContentLoaded", async function () {
        // Wait for the page to fully load, then run initial setup for the page
        initialSetup();
    });

    selectItemType.addEventListener("change", function () {
        // Show the correct item type based on current selection
        itemTypeSelection();
    });

    garmentAmount.addEventListener("change", function () {
        // Calulate a new total based on changed inputs
        stichesCalculations.calculateGarmentTotal();
    });

    garmentCostPerItem.addEventListener("change", function () {
        // Calulate a new total based on changed inputs
        stichesCalculations.calculateGarmentTotal();
    });

    document.getElementById('vinylizeAmount').addEventListener("change", function () {
        // Calulate a new total based on changed inputs
        stichesCalculations.calculateVinylizeTotal();
    });

    document.getElementById('vinylizeCostPerItem').addEventListener("change", function () {
        // Calulate a new total based on changed inputs
        stichesCalculations.calculateVinylizeTotal();
    });

    document.getElementById('embroideryAmount').addEventListener("change", function () {
        // Calulate a new total based on changed inputs
        stichesCalculations.calculateEmbroideryTotal();
    });

    document.getElementById('embroideryCostPerItem').addEventListener("change", function () {
        // Calulate a new total based on changed inputs
        stichesCalculations.calculateEmbroideryTotal();
    });

    document.getElementById('otherCostPerItem').addEventListener("change", function () {
        // Calulate a new total based on changed inputs
        stichesCalculations.calculateOtherTotal();
    });

    document.getElementById('otherAmount').addEventListener("change", function () {
        // Calulate a new total based on changed inputs
        stichesCalculations.calculateOtherTotal();
    });

    addGarmentButton.addEventListener("click", async function () {
        // Add a new garment to the design
        await stitchesReadSave.addGarment();
    });

    saveGarmentButton.addEventListener("click", async function () {
        // Save the changes made to a garment
        await stitchesReadSave.updateGarment();
    });

    previousDesignButtonTop.addEventListener('click', async function () {
        // Switch to the previous design
        await stitchesReadSave.previousDesign();
        checkNextPreviousDesignShown();
    });

    previousDesignButtonBottom.addEventListener('click', async function () {
        // Switch to the previous design
        await stitchesReadSave.previousDesign();
        checkNextPreviousDesignShown();
    });

    nextDesignButtonTop.addEventListener('click', async function () {
        // Switch to the next design
        await stitchesReadSave.nextDesign();
        checkNextPreviousDesignShown();
    });

    nextDesignButtonBottom.addEventListener('click', async function () {
        // Switch to the next design
        await stitchesReadSave.nextDesign();
        checkNextPreviousDesignShown();
    });

    reviewButton.addEventListener('click', async function () {
        // Submit the design and move to the review page
        await stitchesReadSave.submitDesign(true);

        //Save Design Type as well

        //Redirct to review
        window.location.href = '/review';
    });

    designForm.addEventListener('keypress', function (e) {
        //Prevent enter from submitting form
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    })

}
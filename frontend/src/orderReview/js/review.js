// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import * as stitchesReadSave from './Library/stitchesReadSave.js'
import * as stitchesIDs from './Library/stitchesIDs'
import * as stichesClass from './Library/stichesClass.js'
import * as stitchesFetchGet from './Library/stitchesFetchGet'

// Get elements from webpage
let editOrderButton = document.getElementById("editOrderButton");
let editCustomerButton = document.getElementById("editCustomerButton");

//Retrieve all the current order values from the database
async function initialSetup() {
    //Retrieve all available IDs
    stitchesIDs.retrieveIDs();

    //Retrieve the current Customer
    let currentCustomer = await stitchesReadSave.getCurrentCustomer();

    //Update the customer name
    stitchesIDs.determineFullName();

    //Retrieve the current order
    await stitchesReadSave.getCurrentOrder();

    //Update the dates
    stitchesIDs.updateDeliveryDate();
    stitchesIDs.updateOrderDate();

    //Retrieve all designs for the current order
    await updateDesignCards(true);

    //Update Mongo with calculated values

}

// Get all the Designs
async function updateDesignCards(updateGarments) {

    // Retrieve all matching designs from the database
    var newDesign = new stichesClass.Design(true);
    let designResults = await stitchesFetchGet.fetchAllDesigns(newDesign)

    var designLength = await designResults.length;

    console.log("designResults");
    console.log(designResults);

    //Determine Length of Response
    for (let i = 0; i < designLength; i++) {
        //Check if  this design already exists
        var thisDesignLabel = "design_" + designResults[i].designNumber;

        var thisDesign = document.getElementById(thisDesignLabel);

        //If the design doesn't exist then clone design 1 to create this design
        if (thisDesign == null) {
            var clone = document.getElementById("design_1").cloneNode(true);
            clone.id = thisDesignLabel;

            //Append to Design
            document.getElementById("orderReview").appendChild(clone);
        }

        //Add event listener for edit button
        thisDesign.querySelector('#editDesignButton').addEventListener('click', async function () {
            editDesign(thisDesign);
        });

        var newDesign = new stichesClass.Design(false, designResults[i], thisDesign);

        //Update design with these values
        thisDesign.querySelector('#designOf').innerHTML = "Design " + designResults[i].designNumber;
        // thisDesign.querySelector('#description').value = designResults[i].designDescription;
        // thisDesign.querySelector('#designNotes').value = designResults[i].designNotes;
        // //Design Image here
        // thisDesign.querySelector('#designType').value = designResults[i].designType;
        console.log(designResults[i].designNumberGarments);
        // thisDesign.querySelector('#designNumberGarments').value = designResults[i].designNumberGarments;
        // thisDesign.querySelector('#designTotalItems').value = 0;
        // thisDesign.querySelector('#designTotalCost').value = 0;

        //If this isn't a garment hide the number of garments
        if (designResults[i].designType == "Garment") {
            //thisDesign.querySelector('showGarments').style.display = "block";
        }
        else {
            thisDesign.querySelector('showGarments').style.display = "none";
        }
    }


    // Now retrieve all garments for each design
    //This is done second to prevent duplicating unneeded garments from design 1 while its acting as a template
    if (updateGarments) {
        for (let i = 0; i < designLength; i++) {
            //Select design
            var thisDesignForGarment = document.getElementById("design_" + designResults[i].designNumber);

            //Update all garments for this design
            updateGarmentCards(thisDesignForGarment);
        }
    }
}

// Retrieve all matching garments from the database
async function updateGarmentCards(thisDesign) {
    var newGarment = new stichesClass.Garment(true, null, thisDesign);
    console.log(newGarment);
    let garmentResults = await stitchesFetchGet.fetchAllGarment(newGarment)

    console.log("garmentResults");
    console.log(garmentResults);

    var garmentLength = await garmentResults.length;

    //Process response
    for (let i = 0; i < garmentLength; i++) {
        //Check if  this garment already exists
        // var thisDesignLabel = "design_" + thisDesignNumber;
        var thisGarmentNumber = await garmentResults[i].garmentNumber;
        var thisGarmentLabel = "#garment_" + thisGarmentNumber;

        // var thisDesign = document.getElementById(thisDesignLabel);
        var thisGarment = thisDesign.querySelector(thisGarmentLabel);
        //If the garment doesn't exist then clone design 1 to create this design
        if (thisGarment == null || thisGarment == undefined) {
            stitchesReadSave.cloneGarmentCard(thisDesign, garmentResults[i].garmentNumber);
            thisGarment = thisDesign.querySelector(thisGarmentLabel);
        }

        //Add event listener for edit button
        thisGarment.querySelector('#editGarmentButton').addEventListener('click', async function () {
            editGarment(thisDesign, thisGarment);
        });

        var newGarment = new stichesClass.Garment(false, garmentResults[i], thisGarment);

        // //Update garment with these values
        // thisGarment.querySelector('#garmentGender').innerHTML = garmentResults[i].garmentGender;
        // thisGarment.querySelector('#garmentSize').value = garmentResults[i].garmentSize;
        // thisGarment.querySelector('#garmentStyleNumber').value = garmentResults[i].garmentStyleNumber;
        // thisGarment.querySelector('#garmentAmount').value = garmentResults[i].garmentAmount;
        // thisGarment.querySelector('#garmentCostPer').value = garmentResults[i].garmentCostPerItem;
        // thisGarment.querySelector('#garmentTotalCost').value = garmentResults[i].garmentTotalCost;

        //Add items to Items in Design
        thisDesign.querySelector('#designTotalItems').value = parseFloat(thisDesign.querySelector('#designTotalItems').value) + parseFloat(garmentResults[i].garmentAmount);

        //Add value to Design cost
        thisDesign.querySelector('#designTotalCost').value = parseFloat(thisDesign.querySelector('#designTotalCost').value) + parseFloat(garmentResults[i].garmentTotalCost);
    }

    //Update order cost
    document.getElementById("totalItems").value = parseFloat(document.getElementById("totalItems").value) + parseFloat(thisDesign.querySelector('#designTotalItems').value);
    document.getElementById("totalCost").value = parseFloat(document.getElementById("totalCost").value) + parseFloat(thisDesign.querySelector('#designTotalCost').value);

    //Determine shipping estimate
    //Placeholder for now
    document.getElementById("shippingCost").value = parseFloat(document.getElementById("totalItems").value) * 0.10;
    document.getElementById("totalCost").value = parseFloat(document.getElementById("totalCost").value) + parseFloat(document.getElementById("shippingCost").value);

    //Add Shipping cost to Total Cost
    //document.getElementById("totalCost").value = parseInt(document.getElementById("totalCost").value, 10) + parseInt(document.getElementById("shippingCost").value, 10)

    //Calculate taxes
    if (document.getElementById("taxExemption").value != "NA" || document.getElementById("taxExemption").value != "N/A" || document.getElementById("taxExemption").value != null || document.getElementById("taxExemption").value != "0") {
        // GA sales tax = 4.00 percent
        document.getElementById("totalTaxes").value = 0;
    }
    else {
        document.getElementById("totalTaxes").value = parseFloat(document.getElementById("shippingCost").value) * 0.04;
    }

    //Determine Total Price by adding taxes to order 
    document.getElementById("totalPrice").value = parseFloat(document.getElementById("totalCost").value) + parseFloat(document.getElementById("totalTaxes").value)
}

// Create event listeners to handle user inputs
{
    document.addEventListener("DOMContentLoaded", async function () {
        initialSetup();
    });

    editCustomerButton.addEventListener('click', async function () {
        editCustomer();
    })

    editOrderButton.addEventListener('click', async function () {
        editOrder();
    })
}
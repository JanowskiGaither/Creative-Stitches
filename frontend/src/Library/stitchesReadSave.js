import * as stichesClass from './stichesClass.js'
import * as stitchesIDs from './stitchesIDs.js'
import * as stitchesFetchGet from './stitchesFetchGet.js'

// Handle Orders

export async function editOrder() {

    //Store info
    sessionStorage.editOrder = true;
    sessionStorage.editType = "order";

    stitchesIDs.storeIDs();

    //Redirect to design
    window.location.href = '/order';
}

export async function getCurrentOrder() {
    //Fetch the current Garment
    var currentOrder = new stichesClass.Order(true);
    let orderResult = await stitchesFetchGet.fetchOrder(currentOrder);

    //Update the form with the current order
    let resultOrder = new stichesClass.Order(false, orderResult);

    return resultOrder;
}

// Save the current order
export async function submitOrder() {

    //Save the current design
    var currentOrder = new stichesClass.Order(true);
    stitchesFetchGet.saveOrder(currentOrder);
}

// Handle Customers

export async function editCustomer() {

    //Store info
    sessionStorage.editOrder = true;
    sessionStorage.editType = "customer";

    stitchesIDs.storeIDs();

    //Redirect to design
    window.location.href = '/order';
}

export async function getCurrentCustomer() {
    //Fetch the current Garment
    var currentCustomer = new stichesClass.Customer(true);
    let customerResult = await stitchesFetchGet.fetchCustomer(currentCustomer);

    //Update the form with the current order
    let resultCustomer = new stichesClass.Customer(false, customerResult);

    return resultCustomer;
}


// Handle Designs

export async function editDesign(thisDesign) {

    //Store info
    sessionStorage.editOrder = true;
    sessionStorage.editType = "design";

    stitchesIDs.storeIDs();

    //Redirect to design
    window.location.href = '/design';
}

// Save the current design and retrieve the next designs's values to display
export async function submitDesign() {

    //Save the current design
    var currentDesign = new stichesClass.Design(true);
    stitchesFetchGet.saveDesign(currentDesign);
}

export async function getCurrentDesign() {
    //Fetch the current Design
    var newDesign = new stichesClass.Design(true);
    let designResult = await stitchesFetchGet.fetchDesign(newDesign);

    //Update the forms
    new stichesClass.Design(false, designResult);
    stitchesIDs.determineCurrentDesign();

    //Reset Garment to the first one
    let garmentID = document.getElementById('garmentID');
    let garmentNumber = document.getElementById('garmentNumber');

    garmentID.value = stitchesIDs.createGarmentID();
    garmentNumber.value = 1;

    // Get the first Garment
    await getCurrentGarment();
}

// Save the current design and retrieve the next designs's values to display
export async function previousDesign() {
    //Save the current design
    var currentDesign = new stichesClass.Design(true);
    await stitchesFetchGet.saveDesign(currentDesign);

    //Save current garment values from HTML
    var currentGarment = new stichesClass.Garment(true);
    await stitchesFetchGet.saveGarment(currentGarment);

    //Setup new design query
    let designID = document.getElementById('designID');
    let designNumber = document.getElementById('designNumber');

    designID.value = orderID.toString() + '_' + (parseInt(designNumber.value, 10) - 1).toString();
    designNumber.value = (parseInt(designNumber.value, 10)) - 1;

    var newDesign = new stichesClass.Design(true);

    let designResult = await stitchesFetchGet.fetchDesign(newDesign);
    new stichesClass.Design(false, designResult);
    stitchesIDs.determineCurrentDesign();

    //Reset Garment to the first one
    let garmentID = document.getElementById('garmentID');
    let garmentNumber = document.getElementById('garmentNumber');

    garmentID.value = stitchesIDs.createGarmentID();
    garmentNumber.value = 1;

    // Get the first Garment
    await getCurrentGarment();
}

// Save the current design and retrieve the next designs's values to display
export async function nextDesign() {
    //Save the current design
    var currentDesign = new stichesClass.Design(true);
    await stitchesFetchGet.saveDesign(currentDesign);

    //Save current garment values from HTML
    var currentGarment = new stichesClass.Garment(true);
    await stitchesFetchGet.saveGarment(currentGarment);

    //Setup new design query
    let designID = document.getElementById('designID');
    let designNumber = document.getElementById('designNumber');

    designID.value = orderID.toString() + '_' + (parseInt(designNumber.value, 10) + 1).toString();
    designNumber.value = parseInt(designNumber.value, 10) + 1;

    var newDesign = new stichesClass.Design(true);

    let designResult = await stitchesFetchGet.fetchDesign(newDesign);
    new stichesClass.Design(false, designResult);
    stitchesIDs.determineCurrentDesign();

    //Reset Garment to the first one
    let garmentID = document.getElementById('garmentID');
    let garmentNumber = document.getElementById('garmentNumber');

    garmentID.value = stitchesIDs.createGarmentID();
    garmentNumber.value = 1;

    getCurrentGarment();
}

// Handle Garments

export async function getCurrentGarment() {
    //Fetch the current Garment
    var newGarment = new stichesClass.Garment(true);
    let garmentResult = await stitchesFetchGet.fetchGarment(newGarment);

    //Update the forms
    new stichesClass.Garment(false, garmentResult);

    stitchesIDs.determineCurrentGarment();

    updateGarmentTable();
}


// Update an existing garment from the design
export async function updateGarment() {
    //Save current garment values from HTML
    var currentGarment = new stichesClass.Garment(true);

    await stitchesFetchGet.saveGarment(currentGarment);

    //Update the Garment Table to include the new garment
    updateGarmentTable();
}

export async function editGarment(currentButton, editForm = null) {

    if (editForm != null && editForm != undefined) {
        //Store info
        sessionStorage.editOrder = true;
        sessionStorage.editType = "garment";

        stitchesIDs.storeIDs();

        //Redirect to design
        window.location.href = '/design';
    }
    else {
        //Get garment ID of targeted row
        var parent = currentButton.parentNode.parentNode;

        let garmentNumber = document.getElementById('garmentNumber');
        let garmentID = document.getElementById('garmentID');

        garmentNumber.value = (parseInt(parent.cells[1].innerHTML, 10));
        garmentID.value = stitchesIDs.createGarmentID();

        var newGarment = new stichesClass.Garment(true);

        let resultJSON = await stitchesFetchGet.fetchGarment(newGarment);

        //Update the page based on the result
        new stichesClass.Garment(false, resultJSON);

        stitchesIDs.determineCurrentGarment();
        updateGarmentTable()
    }
}

export async function deleteGarment(currentButton) {
    //Get garment ID of targeted row
    var parent = currentButton.parentNode.parentNode;

    let garmentNumber = document.getElementById('garmentNumber');
    let garmentID = document.getElementById('garmentID');
    let designNumberGarments = document.getElementById('designNumberGarments');

    garmentNumber.value = parseInt(parent.cells[1].innerHTML, 10);
    garmentID.value = stitchesIDs.createGarmentID();

    var newGarment = new stichesClass.Garment(true);
    await stitchesFetchGet.removeGarment(newGarment);

    //Update the garment table to show the deletion
    designNumberGarments.value--;
    garmentNumberGarments.value--;

    updateGarmentTable();
}

// Add a new garment to the design
export async function addGarment() {
    //Increment total number of garments and select the new one
    designNumberGarments.value = parseInt(designNumberGarments.value, 10) + 1;
    garmentNumberGarments.value = designNumberGarments.value;
    garmentNumber.value = designNumberGarments.value;

    garmentID.value = stitchesIDs.createGarmentID();

    var newGarment = new stichesClass.Garment(true);


    let resultJSON = await stitchesFetchGet.fetchGarment(newGarment);

    //Update the page based on the result
    new stichesClass.Garment(false, resultJSON);

    stitchesIDs.determineCurrentGarment();
    updateGarmentTable()
}

export function cloneGarmentCard(thisDesign, garmentNumber) {
    var sourceCard = thisDesign.querySelector('#garment_1');
    var clone = sourceCard.cloneNode(true);

    //Update values for clone
    clone.id = "garment_" + garmentNumber;
    clone.querySelector('#garmentTitle').innerHTML = "Garment " + garmentNumber;

    //Append to Design
    thisDesign.querySelector('#showGarments').appendChild(clone);
}

// Update the Garments table
export async function updateGarmentTable() {
    //Create a query garment
    var newGarment = new stichesClass.Garment(true);

    //Get the status of all garments for this design
    let resultData = await stitchesFetchGet.fetchAllGarment(newGarment);

    //Update the table
    updateTable(resultData);
}

export function updateTable(data) {
    // Get the garment table
    let garmentTable = document.getElementById("garmentTable");
    let designNumberGarments = document.getElementById("designNumberGarments");

    if (garmentTable !== null && data !== null && data !== undefined) {
        //Determine if more rows are needed
        var numbRows = garmentTable.rows.length;

        let maxGarmentNumberGarments = 1;

        //Determine how many designs exist
        for (let i = 0; i < data.length; i++) {
            if (data[i].garmentNumberGarments > maxGarmentNumberGarments) {
                maxGarmentNumberGarments = data[i].garmentNumberGarments;
            }
        }

        //Update the number of garments based on the database results
        designNumberGarments.value = maxGarmentNumberGarments;

        //More rows are needed
        while (numbRows <= (parseInt(designNumberGarments.value, 10) + 1)) {

            //Clone second row
            var clone = garmentTable.rows[1].cloneNode(true);

            //Update button value
            clone.cells[0].value = "false";
            clone.cells[6].value = "false";

            garmentTable.appendChild(clone);

            //Update row count
            numbRows = garmentTable.rows.length;
        }

        //Less rows are needed
        while (numbRows > (parseInt(designNumberGarments.value, 10)) + 1) {
            //Remove Row
            garmentTable.deleteRow(numbRows - 1)

            //Update row count
            numbRows = garmentTable.rows.length;
        }

        //Test add row values
        for (let i = 1; i < numbRows; i++) {

            //Get number of cells in current row
            var numbCells = garmentTable.rows[i].cells.length;

            //Number of cells should always be 7
            while (numbCells < 7) {
                //Add Cell
                garmentTable.rows[i].insertCell();

                //Update cell count
                numbCells = garmentTable.rows[i].cells.length;
            }

            //Check if update functioned is needed
            if (garmentTable.rows[i].cells[0].value != "true") {
                //Add event listener for edit button
                garmentTable.rows[i].cells[0].firstChild.addEventListener('click', async function () {
                    editGarment(this);
                });
                garmentTable.rows[i].cells[0].value = "true";
            }

            //Check if update functioned is needed
            if (garmentTable.rows[i].cells[6].value != "true") {
                //Add event listener for delete button
                garmentTable.rows[i].cells[6].firstChild.addEventListener('click', async function () {
                    deleteGarment(this);
                });

                garmentTable.rows[i].cells[6].value = "true";
            }

            //Determine if the database already has values for this row
            var rowUpdated = false;
            for (let j = 0; j < data.length; j++) {
                if (data[j].garmentNumber == i) {
                    garmentTable.rows[i].cells[1].innerHTML = data[j].garmentNumber;
                    garmentTable.rows[i].cells[2].innerHTML = data[j].garmentGender;
                    garmentTable.rows[i].cells[3].innerHTML = data[j].garmentSize;
                    garmentTable.rows[i].cells[4].innerHTML = data[j].garmentAmount;
                    garmentTable.rows[i].cells[5].innerHTML = "$" + data[j].garmentTotalCost;

                    rowUpdated = true;
                }
            }

            //Modify all values in row
            if (rowUpdated == false) {
                garmentTable.rows[i].cells[1].innerHTML = i;
                garmentTable.rows[i].cells[2].innerHTML = "";
                garmentTable.rows[i].cells[3].innerHTML = "";
                garmentTable.rows[i].cells[4].innerHTML = "";
                garmentTable.rows[i].cells[5].innerHTML = "";
            }
        }
    }
}
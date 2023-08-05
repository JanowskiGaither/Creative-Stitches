import '../scss/designStyles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Create Garment Class
class Garment {
    designID = 0;
    orderID = 0;
    garmentID = 0;
    garmentNumberGarments = 1;
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
            this.garmentNumberGarments = designNumberGarments;
            this.garmentID = garmentID;
            this.garmentNumber = garmentNumber;
            this.garmentGender = document.getElementById("garmentGender").value;
            this.garmentSize = document.getElementById("garmentSize").value;
            this.garmentStyleNumber = document.getElementById("garmentStyleNumber").value;
            this.garmentAmount = document.getElementById("garmentAmount").value;
            this.garmentCostPerItem = document.getElementById("garmentCostPerItem").value;
            this.garmentTotalCost = document.getElementById("garmentTotalCost").value;
        }
    }
}

// Create Design Class
class Design {
    designID = 0;
    orderID = 0;
    designType = 0;
    designDescription = 0;
    designNotes = 0;
    designImages = 0;
    designNumberGarments = 1;
    designNumber = 1;
    designTotalCost = 0;
    reviewOrder = false;
    constructor(getFormValues) {
        if (getFormValues) {
            this.designID = designID;
            this.orderID = orderID;
            this.designType = document.getElementById("designType").value;
            this.designDescription = document.getElementById("designDescription").value;
            this.designNotes = document.getElementById("designNotes").value;
            //this.designImages = document.getElementById("designImages").value;
            this.designNumberGarments = designNumberGarments;
            this.designNumber = designNumber;
            this.reviewOrder = false;
            //this.designTotalCost = document.getElementById("designTotalCost").value;
        }
    }
}

// Link commonly used variables from HTML
// let previousGarmentButton = document.getElementById("previousGarment");
// let nextGarmentButton = document.getElementById("nextGarment");
let previousDesignButtonTop = document.getElementById("previousDesignTop");
let nextDesignButtonTop = document.getElementById("nextDesignTop");
let previousDesignButtonBottom = document.getElementById("previousDesignBottom");
let nextDesignButtonBottom = document.getElementById("nextDesignBottom");
let selectItemType = document.getElementById("designType");
let garmentTable = document.getElementById("garmentTable");
let designForm = document.getElementById('designForm');
let addGarmentButton = document.getElementById('addGarment');
let saveGarmentButton = document.getElementById('saveGarment');
let reviewButton = document.getElementById('reviewButton');

var orderID;
var editOrder;
var designNumber = 1;
var garmentNumber = 1;
var designNumberGarments = 1;
var numberOfDesigns = 1;
var designID;
var garmentID;
var garmentTableButtonImplemented = [true, false]
var reviewOrder = false;

function initialSetup() {

    //Retrieve editOrder
    if (sessionStorage.getItem('editOrder') != null) {
        editOrder = sessionStorage.getItem('editOrder');
    }
    else {
        //For now just substitude value, later update popup error maybe
        editOrder = 'NA'
    }

    if (editOrder == true) {
        //Retrieve designID
        sessionStorage.editOrder = false;
        if (sessionStorage.getItem('designID') != null) {
            orderID = sessionStorage.getItem('orderID');
            designID = sessionStorage.getItem('designID');

            //Determine where to focus
            if (sessionStorage.editType = "garment") {
                garmentID = sessionStorage.getItem('garmentId');

                if (sessionStorage.getItem('designID') != null) {
                    getCurrentDesign();
                }

                if (sessionStorage.getItem('garmentId') != null) {
                    getCurrentGarment();
                    updateGarmentTable();
                    $('#garmentModal').modal('show');
                    //document.getElementById("garmentModal").focus()
                }
            }
            else if (sessionStorage.editType = "design") {
                document.getElementById("designForm").focus()
            }
        }
        else {
            //For now just substitude value, later update popup error maybe
            designID = orderID.toString() + '_' + designNumber.toString();
        }
    }
    else {
        //Retrieve orderID
        if (sessionStorage.getItem('orderID') != null) {
            orderID = sessionStorage.getItem('orderID');
        }
        else {
            //For now just substitude value, later update popup error maybe
            orderID = 'NA'
        }
    }

    //Create first designID
    designID = orderID.toString() + '_' + designNumber.toString();
    garmentID = designID.toString() + '_' + garmentNumber.toString();

    // Hide unselected initially
    itemTypeSelection();

    //Update current design and garment
    determineCurrentDesign();
    determineCurrentGarment();

    //Update design forward/backward buttons
    checkNextPreviousDesignShown();
    //checkNextPreviousGarmentShown();

    //Populate the first design if possible
    if (orderID != 'NA') {
        getCurrentDesign();
        updateGarmentTable();
    }

    // Calculate total costs at start
    calculateGarmentTotal();
    calculateOtherTotal();
    calculateVinylizeTotal();
    calculateEmbroideryTotal();
}

function determineCurrentDesign() {
    document.getElementById("currentDesign").innerText = "Design " + designNumber.toString() + " of " + numberOfDesigns.toString();
}

function determineCurrentGarment() {
    document.getElementById("currentGarment").innerText = garmentNumber.toString() + " of " + designNumberGarments.toString();
}

async function addGarment() {
    designNumberGarments++;
    garmentNumber = designNumberGarments;

    garmentID = designID.toString() + '_' + ((parseInt(garmentNumber, 10))).toString();

    await getCurrentGarment();

    console.log('Done getCurrentGarment');

    determineCurrentGarment();
    updateGarmentTable()
}

function checkNextPreviousDesignShown() {
    // If its the final design show submit
    if (designNumber == numberOfDesigns) {
        document.getElementById('reviewButton').style.display = "block";
        document.getElementById('nextDesignTop').style.display = "none";
        document.getElementById('nextDesignBottom').style.display = "none";
    }
    // Hide submit and show next design button
    else {
        document.getElementById('reviewButton').style.display = "none";
        document.getElementById('nextDesignTop').style.display = "block";
        document.getElementById('nextDesignBottom').style.display = "block";
    }

    // If its the first design don't show previous button
    if (designNumber == 1) {
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
async function updateGarment() {
    //Save current garment values from HTML
    var currentGarment = new Garment(true);

    saveGarment(currentGarment);
}

async function saveGarment(garment) {
    await fetch('/garmentSubmit', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(garment)
    }).then(response => { return response })

    updateGarmentTable();
}

async function saveDesign(design) {
    fetch('/designSubmit', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(design)
    }).then(response => { return response })
}

async function removeGarment(garment) {
    const response = await fetch('/garmentRemove', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(garment)
    }).then(response => { return response })

    console.log('Garment Deleted');

    //Update Table
    designNumberGarments--;

    updateGarmentTable();
}


async function fetchGarment(garment) {
    const response = await fetch('/garmentRetrieve', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(garment)
    }).then(response => { return response })
    //Parse response to update values
    const jsonResponse = await response.json();
    garmentID = jsonResponse.garmentID;
    document.getElementById("garmentGender").value = jsonResponse.garmentGender;
    document.getElementById("garmentSize").value = jsonResponse.garmentSize;
    document.getElementById("garmentStyleNumber").value = jsonResponse.garmentStyleNumber;
    document.getElementById("garmentAmount").value = jsonResponse.garmentAmount;
    document.getElementById("garmentCostPerItem").value = jsonResponse.garmentCostPerItem;
    document.getElementById("garmentTotalCost").value = jsonResponse.garmentTotalCost;
}

async function editGarment(currentButton) {

    //Get garment ID of targetted row
    var parent = currentButton.parentNode.parentNode;

    garmentNumber = (parseInt(parent.cells[1].innerHTML, 10));

    garmentID = designID.toString() + '_' + ((parseInt(garmentNumber, 10))).toString();

    getCurrentGarment();
}

async function deleteCurrentGarment() {
    //Setup new garment query
    var newGarment = new Garment();
    newGarment.garmentID = garmentID;
    newGarment.orderID = orderID;
    newGarment.designID = designID;
    newGarment.garmentNumberGarments = designNumberGarments;
    newGarment.garmentNumber = garmentNumber;
    await removeGarment(newGarment)
}

async function deleteGarment(currentButton) {

    //Get garment ID of targeted row
    var parent = currentButton.parentNode.parentNode;

    garmentNumber = (parseInt(parent.cells[1].innerHTML, 10));

    garmentID = designID.toString() + '_' + ((parseInt(garmentNumber, 10))).toString();

    console.log("Delete Garment")
    deleteCurrentGarment();
}


async function fetchAllGarment(garment) {
    const data = await fetch('/garmentAllRetrieve', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(garment)
    }).then(data => data.json())
        .then(data => {
            { return data }
        })
        .catch((error) => {
            console.error(error)
        })
    //Update table

    //Determine if more rows are needed
    var numbRows = garmentTable.rows.length;

    //More rows are needed
    while (numbRows <= designNumberGarments) {

        //Clone second row
        var clone = garmentTable.rows[1].cloneNode(true);
        garmentTable.appendChild(clone)

        garmentTableButtonImplemented.push(false);

        //Update row count
        numbRows = garmentTable.rows.length;
    }
    (parseInt(designNumberGarments, 10))
    //Less rows are needed
    while (numbRows > (parseInt(designNumberGarments, 10)) + 1) {
        //Remove Row
        garmentTable.deleteRow(numbRows - 1)

        //Update row count
        numbRows = garmentTable.rows.length;
    }

    //Test add default values
    for (let i = 1; i < numbRows; i++) {

        //Get number of cells in current row
        var numbCells = garmentTable.rows[i].cells.length;

        //Number of cells should always be 5
        while (numbCells < 7) {
            //Add Cell
            garmentTable.rows[i].insertCell();

            //Update cell count
            numbCells = garmentTable.rows[i].cells.length;
        }

        //Check if update functioned is needed
        if (garmentTableButtonImplemented[i] == false) {
            //Add event listener for edit button
            garmentTable.rows[i].cells[0].firstChild.addEventListener('click', async function () {
                editGarment(this);
            });

            //Add event listener for delete button
            garmentTable.rows[i].cells[6].firstChild.addEventListener('click', async function () {
                deleteGarment(this);
            });

            garmentTableButtonImplemented[i] = true;
        }

        //Determine if the database already has values for this row
        var rowUpdated = false;
        for (let j = 0; j < data.length; j++) {
            if (data[j].garmentNumber == i) {
                //console.log("Match Found");
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


async function fetchDesign(design) {
    const response = await fetch('/designRetrieve', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(design)
    }).then(response => { return response })

    //Parse response to update values
    const jsonResponse = await response.json();
    designID = jsonResponse.designID;

    if (jsonResponse.designDescription != 'NA') {
        document.getElementById("designType").value = jsonResponse.designType;
        document.getElementById("designDescription").value = jsonResponse.designDescription;
        document.getElementById("designNotes").value = jsonResponse.designNotes;
        //document.getElementById("designImages").value = jsonResponse.designImages;
    }
    else {
        document.getElementById("designType").value = 'Garment';
    }

    itemTypeSelection();
}

async function getCurrentDesign() {
    //Setup new design query
    var newDesign = new Design();
    designID = orderID.toString() + '_' + ((parseInt(designNumber, 10))).toString();
    designNumber = ((parseInt(designNumber, 10)));
    newDesign.designID = designID;
    newDesign.orderID = orderID;

    await fetchDesign(newDesign);

    garmentID = designID.toString() + '_1';
    garmentNumber = 1;

    getCurrentGarment();

    determineCurrentGarment();
    determineCurrentDesign()
    //checkNextPreviousGarmentShown();
    checkNextPreviousDesignShown();
    updateGarmentTable();
}

async function getCurrentGarment() {
    //Setup new garment query
    var newGarment = new Garment();
    newGarment.garmentID = garmentID;
    newGarment.orderID = orderID;
    newGarment.designID = designID;
    fetchGarment(newGarment)

    determineCurrentGarment();
    //checkNextPreviousGarmentShown();
    updateGarmentTable();
}

// Save the current design and retrieve the next designs's values to display
async function submitDesign(reviewOrder) {
    //Save the current design
    var currentDesign = new Design(true);
    if (reviewOrder) {
        currentDesign.reviewOrder = true;
    }
    saveDesign(currentDesign);
}

// Save the current design and retrieve the next designs's values to display
async function previousDesign() {
    //Save the current design
    var currentDesign = new Design(true);

    //Save current garment values from HTML
    var currentGarment = new Garment(true);

    saveDesign(currentDesign);
    saveGarment(currentGarment);

    //Setup new design query
    var newDesign = new Design();
    designID = orderID.toString() + '_' + ((parseInt(designNumber, 10)) - 1).toString();
    designNumber = ((parseInt(designNumber, 10)) - 1);
    newDesign.designID = designID;
    newDesign.orderID = orderID;

    fetchDesign(newDesign);

    getCurrentGarment();

    determineCurrentGarment();
    determineCurrentDesign();
    //checkNextPreviousGarmentShown();
    checkNextPreviousDesignShown();
    updateGarmentTable();
}

// Save the current design and retrieve the next designs's values to display
async function nextDesign() {
    //Save the current design
    var currentDesign = new Design(true);

    //Save current garment values from HTML
    var currentGarment = new Garment(true);

    saveDesign(currentDesign);
    saveGarment(currentGarment);

    //Setup new design query
    var newDesign = new Design();
    designID = orderID.toString() + '_' + ((parseInt(designNumber, 10)) + 1).toString();
    designNumber = ((parseInt(designNumber, 10)) + 1);
    newDesign.designID = designID;
    newDesign.orderID = orderID;

    //Setup new garment query
    var newGarment = new Garment();
    garmentID = designID.toString() + '_1';
    garmentNumber = 1;
    newGarment.garmentID = garmentID;
    newGarment.orderID = orderID;
    newGarment.designID = designID;

    fetchDesign(newDesign);

    getCurrentGarment();

    determineCurrentGarment();
    determineCurrentDesign()
    //checkNextPreviousGarmentShown();
    checkNextPreviousDesignShown();
    updateGarmentTable();
}

// Update the Garments table
async function updateGarmentTable() {
    //Create a query garment
    var newGarment = new Garment(true);

    //Setup new garment query
    var newGarment = new Garment();
    newGarment.orderID = orderID;
    newGarment.designID = designID;

    fetchAllGarment(newGarment)
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

document.getElementById('vinylizeAmount').addEventListener("change", function () {
    calculateVinylizeTotal();
});

document.getElementById('vinylizeCostPerItem').addEventListener("change", function () {
    calculateVinylizeTotal();
});

document.getElementById('embroideryAmount').addEventListener("change", function () {
    calculateEmbroideryTotal();
});

document.getElementById('embroideryCostPerItem').addEventListener("change", function () {
    calculateEmbroideryTotal();
});

document.getElementById('otherCostPerItem').addEventListener("change", function () {
    calculateOtherTotal();
});

document.getElementById('otherAmount').addEventListener("change", function () {
    calculateOtherTotal();
});

addGarmentButton.addEventListener("click", async function () {
    addGarment();
});

saveGarmentButton.addEventListener("click", async function () {
    updateGarment();
});


previousDesignButtonTop.addEventListener('click', async function () {
    previousDesign()
});

nextDesignButtonTop.addEventListener('click', async function () {
    nextDesign()
});

previousDesignButtonBottom.addEventListener('click', async function () {
    previousDesign()
});

nextDesignButtonBottom.addEventListener('click', async function () {
    nextDesign()
});

reviewButton.addEventListener('click', async function () {
    console.log('Review Order'
    )
    submitDesign(true);

    //Redirct to review
    window.location.href = '/review';
});

//Prevent enter from submitting form
designForm.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
    }
})
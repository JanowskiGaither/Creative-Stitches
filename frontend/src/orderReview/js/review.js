// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

var orderID;
var designID;

//Retrieve all the current order values from the database
async function initialSetup() {
    //Retrieve orderID
    if (sessionStorage.getItem('orderID') != null) {
        orderID = sessionStorage.getItem('orderID');
    }
    else {
        //For now just substitude value, later update popup error maybe
        orderID = 'NA'
    }

    //Create designID
    designID = orderID.toString() + '_' + designNumber.toString();

    //Retrieve the correct order

}

async function getCurrentOrder() {
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


document.addEventListener("DOMContentLoaded", async function () {
    initialSetup();
});
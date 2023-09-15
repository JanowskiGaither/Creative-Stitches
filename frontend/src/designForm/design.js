import '../scss/designFormStyles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import * as stitchesReadSave from '../Library/stitchesReadSave.js'
import * as stitchesIDs from '../Library/stitchesIDs'
import * as stichesCalculations from '../Library/stitchesCalculations'

let selectItemType = document.getElementById("designType");
let saveGarmentModal = document.getElementById("saveGarmentModal");
let testButtons = document.getElementById("testButtons");

// Set the initial page values 
async function initialSetup() {

}

// Show or hard fields based on Design Type
function itemTypeSelection() {
    var typeSelected = selectItemType.options[selectItemType.selectedIndex].text;

    // Show Garment related divs, hide the rest
    hideShowDivs(typeSelected);
}

// hide and show the detail cards based on the selected item type
function hideShowDivs(typeSelected) {
    document.getElementById('showGarment').style.display = "none";
    document.getElementById('showOther').style.display = "none";
    document.getElementById('showEmbroidery').style.display = "none";
    document.getElementById('showVinylize').style.display = "none";

    switch (typeSelected) {
        case "Garment":
            document.getElementById('showGarment').style.display = "block";
            break;
        case "Embroidery":
            document.getElementById('showEmbroidery').style.display = "block";
            break;
        case "Vinylize":
            document.getElementById('showVinylize').style.display = "block";
            break;
        case "Other":
            document.getElementById('showOther').style.display = "block";
            break;

        default:
            alert("Something went wrong!");

    }
}

// write all the field values in the modal to the session storage
function saveModalValues() {
    //test the function by writing the value in the style number field to the console
    var styleNumber = document.getElementById("garmentStyleNumber").value;
    sessionStorage.setItem("style_number", styleNumber)

}

document.addEventListener("DOMContentLoaded", async function () {
    // Wait for the page to fully load, then run initial setup for the page
    initialSetup();
});

selectItemType.addEventListener("change", function () {
    // Show the correct item type based on current selection
    itemTypeSelection();
});

saveGarmentModal.addEventListener("click", function () {
    saveModalValues();
});

for (let i = 0; i < 3; i++) {
    let j = i + 1;
    testButtons.children[i].addEventListener("click", function () {
        console.log("you clicked test " + j.toString());
    })
}
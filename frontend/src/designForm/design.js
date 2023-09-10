import '../scss/designFormStyles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import * as stitchesReadSave from '../Library/stitchesReadSave.js'
import * as stitchesIDs from '../Library/stitchesIDs'
import * as stichesCalculations from '../Library/stitchesCalculations'

let selectItemType = document.getElementById("designType");

// Set the initial page values 
async function initialSetup() {

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

document.addEventListener("DOMContentLoaded", async function () {
    // Wait for the page to fully load, then run initial setup for the page
    initialSetup();
});

selectItemType.addEventListener("change", function () {
    // Show the correct item type based on current selection
    itemTypeSelection();
});
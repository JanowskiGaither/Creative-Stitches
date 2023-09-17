import '../scss/designFormStyles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import * as stitchesReadSave from '../Library/stitchesReadSave.js'
import * as stitchesIDs from '../Library/stitchesIDs'
import * as stichesCalculations from '../Library/stitchesCalculations'

let selectItemType = document.getElementById("designType");
let saveGarmentModal = document.getElementById("saveGarmentModal");
let testButtons = document.getElementById("testButtons");
let exitAlert = document.getElementsByClassName('alert-exit');
let garmentModal = document.getElementById('garmentModal')

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
  sessionStorage.setItem("style_number", styleNumber);

}

//bootstrap alert example
function bootstapAlert(alertMessage, type) {
  const alertPlaceholder = document.getElementById('alertPlaceholder')
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${alertMessage}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('');

  alertPlaceholder.append(wrapper)
}

function readModalValues() {
  try {
    var styleNumber = sessionStorage.getItem("style_number", styleNumber);
    if (styleNumber === "" || styleNumber === null) throw "Please Enter a Style Number";
    let alertMessage = "The current value of styleNumber is " + styleNumber.toString()
    bootstapAlert(alertMessage, 'success')
  } catch (error) {
    bootstapAlert(error.toString(), 'danger');
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

saveGarmentModal.addEventListener("click", function () {
  saveModalValues();
});


// initialize test buttons
for (let i = 0; i < 3; i++) {
  let j = i + 1;
  testButtons.children[i].addEventListener("click", function () {
    try {
      switch (i) {
        case 0:
          readModalValues();
          break;
        case 1:
          checkRequiredFields(garmentModal);
          break;
        case 2:
          console.log("you clicked test " + j.toString() + " !");
          break;
        default:
          console.log("something went wrong");
      }
    } catch (error) {
      alert("Something went wrong in the test: " + error);
    }

  })
}

// Check input values in the modal
function checkRequiredFields(element) {
  var inputs = element.getElementsByTagName('input');
  var dropDowns = element.getElementsByTagName('select');
  try {
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].hasAttribute('required')) {
        var labelName = inputs[i].previousElementSibling.innerText;
        console.log(labelName + " is required!")
      }
    }

    for (var i = 0; i < dropDowns.length; i++) {
      if (dropDowns[i].hasAttribute('required')) {
        console.log("Selection in Dropdown is required!")
      }
    }
  } catch (error) {
    console.log(error.toString())
  }


}
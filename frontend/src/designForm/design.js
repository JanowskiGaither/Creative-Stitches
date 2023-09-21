import '../scss/designFormStyles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import * as stitchesReadSave from '../Library/stitchesReadSave.js'
import * as stitchesIDs from '../Library/stitchesIDs'
import * as stichesCalculations from '../Library/stitchesCalculations'

let selectItemType = document.getElementById("designType");
let saveGarmentModal = document.getElementById("saveGarmentModal");
let testButtons = document.getElementById("testButtons");
let garmentModal = document.getElementById('garmentModal')
let garmentAlert = document.getElementById('garmentAlert')

// Set the initial page values 
async function initialSetup() {
  //add intial setup code here
}

// Show or hard fields based on Design Type
function itemTypeSelection() {
  var typeSelected = selectItemType.options[selectItemType.selectedIndex].text;

  // Show Garment related divs, hide the rest
  hideShowDetails(typeSelected);
}

// hide and show the detail cards based on the selected item type
function hideShowDetails(typeSelected) {
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

function readModalValues() {
  try {
    var styleNumber = sessionStorage.getItem("style_number", styleNumber);
    if (styleNumber === "" || styleNumber === null) throw "Please Enter a Style Number";
    let alertMessage = "The current value of styleNumber is " + styleNumber.toString()
  } catch (error) {
  }
}

function clearModalValues() {
  try {
    sessionStorage.clear()
    console.log("Session Storage cleared!")
  } catch (error) {
    console.log("Session Storage unable to clear!")
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
  testButtons.children[i].addEventListener("click", function () {
    try {
      switch (i) {
        case 0:
          let required = checkRequiredFields(garmentModal);
          for (let req of required) {
            var message = " is required!"
            message = req + message;
            addAlert(garmentAlert, message, 'danger')
          }
          break;
        case 1:
          checkRequiredFields(garmentModal);
          break;
        case 2:
          clearModalValues();
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
  let inputs = element.getElementsByTagName('input');
  let dropDowns = element.getElementsByTagName('select');
  var required = []
  try {
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].hasAttribute('required')) {
        var inputName = inputs[i].previousElementSibling.innerText;
        required.push(inputName.toString())
      }
    }

    for (var i = 0; i < dropDowns.length; i++) {
      if (dropDowns[i].hasAttribute('required')) {
        var selectName = dropDowns[i].previousElementSibling.innerText;
        required.push(selectName.toString())
      }
    }
    return required;
  } catch (error) {
    console.log(error.toString())
  }
}

function addAlert(targetElement, message, type) {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    `  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`,
    `</div>`
  ].join('')

  targetElement.append(wrapper)
}

// determine the current value in each of the input fields
// if it is empty or null, Then it will trigger the alert
// later versions will determine if the current input is valid
function getInputValues() { }
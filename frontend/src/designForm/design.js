import '../scss/designFormStyles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import * as stitchesReadSave from '../Library/stitchesReadSave.js'
import * as stitchesIDs from '../Library/stitchesIDs'
import * as stichesCalculations from '../Library/stitchesCalculations'

// Grab Constant Elements
let selectItemType = document.getElementById("designType");
let saveGarmentModal = document.getElementById("saveGarmentModal");
let testButtons = document.getElementById("testButtons");
let garmentModal = document.getElementById('garmentModal')
let garmentAlert = document.getElementById('garmentAlert')
let requiredModalFields = findRequiredFields(garmentModal);
let modalExitButtons = document.getElementsByClassName('modal-close');


// add event listeners
{
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


}
// ----------Functions----------------------------------------------------------------
// Set the initial page values 
async function initialSetup() {
  //add intial setup code here
  addInputListeners(requiredModalFields, garmentAlert);
  // initialize test buttons
  for (let i = 0; i < 3; i++) {
    testButtons.children[i].addEventListener("click", function () {
      try {
        switch (i) {
          case 0:
            console.log(requiredModalFields.length);
            break;
          case 1:
            console.log(requiredModalFields.length);
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

  //add event listener to each of the modal close buttons
  for (let exit of modalExitButtons) {
    exit.addEventListener("click", function () {
      clearModal(garmentModal);
    })
  }
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
  // var styleNumber = document.getElementById("garmentStyleNumber").value;
  // sessionStorage.setItem("style_number", styleNumber);
  for (let field of requiredModalFields) {
    checkInputValue(field, garmentAlert);
  }
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

// Check input values in the modal
function findRequiredFields(element) {
  let inputs = element.getElementsByTagName('input');
  let dropDowns = element.getElementsByTagName('select');
  var required = []
  try {
    for (let input of inputs) {
      if (input.hasAttribute('required')) {
        required.push(input);
      }
    }

    for (let dropDown of dropDowns) {
      if (dropDown.hasAttribute('required')) {
        required.push(dropDown);
      }
    }
    return required;
  } catch (error) {
    console.log(error.toString())
  }
}

function addAlert(alertPlaceholder, message, type, id) {
  const wrapper = document.createElement('div');
  wrapper.setAttribute('id', id)
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `  <div>${message}</div>`,
    `</div>`
  ].join('')
  alertPlaceholder.append(wrapper);
}

// determine the current value in each of the input fields
// if it is empty or null, Then it will trigger the alert
// later versions will determine if the current input is valid
function checkInputValue(element, alertPlaceholder) {
  var inputName = element.previousElementSibling.innerText;
  var alertID = inputName.split(" ").join("-");
  alertID = alertID.toLowerCase();
  var message = inputName + ' is a required field';
  try {
    if (element.value == '' || element.value === null) {
      addAlert(alertPlaceholder, message, 'danger', alertID);
    } else {
      let alertToRemove = document.getElementById(alertID);
      if (alertToRemove != null) {
        alertToRemove.remove();
      }
    }
  } catch (error) {
    console.log(error.toString());
  }
}

function addInputListeners(requiredFields, alertPlaceholder) {
  for (let field of requiredFields) {
    field.addEventListener("input", function () {
      checkInputValue(field, alertPlaceholder);
    })
  }
}

function clearModal(modal) {
  clearModalInputs(modal);
  clearModalSelects(modal);
}

function clearModalInputs(modal) {
  let inputs = modal.getElementsByTagName('input');
  for (let input of inputs) {
    input.value = null;
  }
}

function clearModalSelects(modal) {
  let dropDowns = modal.getElementsByTagName('select');
  for (let select of dropDowns) {
    select.selectedIndex = 0;
  }
}
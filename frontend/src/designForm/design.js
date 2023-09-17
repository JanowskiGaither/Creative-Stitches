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

// Set the initial page values 
async function initialSetup() {
  //add intial setup code here
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
  let j = i + 1;
  testButtons.children[i].addEventListener("click", function () {
    try {
      switch (i) {
        case 0:
          var testId = "styleNumber";
          var message = "Style Number Required!"
          var type = "alert-danger";
          addAlert(testId, message, type);
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

function addAlert(id, message, type) {
  //Grab the template
  let template = document.getElementById('alertTemplate');
  var clone = template.cloneNode();

  //Update the template
  clone.id = id + "Alert";
  clone.classList.remove("alert-primary");
  clone.classList.add(type);
  clone.getElementsByClassName('ms-2').value = message;
  template.parentNode.prepend(clone);
  document.getElementById('alertPlaceholder').style.display = "block !important";

}
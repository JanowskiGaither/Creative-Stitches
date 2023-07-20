// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Create Customer Class
class Customer {
    customerID = 0;
    firstName = "";
    lastName = "";
    organization = "";
    phone = "";
    email = "";
    constructor() {
    }
}

// Create Order Class
class Order {
    orderID = 0;
    customerID = "";
    orderDescription = "";
    orderDate = "";
    requestedDeliveryDate = "";
    scheduledDeliveryDate = "";
    taxExemption = "";
    totalItems = "";
    totalMaterialCost = "";
    totalTaxes = "";
    totalProfit = "";
    totalSale = "";
    constructor() {
    }
}

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
            //this.designTotalCost = document.getElementById("designTotalCost").value;
        }
    }
}

var orderID;
var customerID;
var designID;

//Retrieve all the current order values from the database
async function initialSetup() {
    //console.log("Initial Setup");
    //Retrieve orderID
    if (sessionStorage.getItem('orderID') != null) {
        orderID = sessionStorage.getItem('orderID');
    }
    else {
        //For now just substitude value, later update popup error maybe
        orderID = 'NA'
    }


    //Retrieve the current order
    await getCurrentOrder();

    //Retrieve customer information
    await getCurrentCustomer();

    //Retrieve all designs for the current order
    await getAllDesigns();

    //Determine shipping estimate
    //Placeholder for now
    document.getElementById("shippingCost").value = document.getElementById("totalItems").value * 0.10;

    //Calculate taxes
    if (document.getElementById("taxExemption").value != "NA" || document.getElementById("taxExemption").value != "N/A" || document.getElementById("taxExemption").value != null) {
        // GA sales tax = 4.00 percent
        document.getElementById("totalTaxes").value = (document.getElementById("shippingCost").value + document.getElementById("totalCost").value) * 0.04;
    }

    //Determine Total Price
    document.getElementById("totalPrice").value = document.getElementById("totalTaxes").value + document.getElementById("totalCost").value + document.getElementById("shippingCost").value;

    //Update Mongo with calculated values
}

async function getCurrentOrder() {
    //Setup new order query
    var newOrder = new Order();
    newOrder.orderID = orderID;
    fetchOrder(newOrder)
}

async function getCurrentCustomer() {
    //Setup customer query
    var newCustomer = new Customer();
    newCustomer.customerID = customerID;
    fetchCustomer(newCustomer)
}

async function fetchOrder(order) {
    const response = await fetch('/orderRetrieve', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(order)
    }).then(response => { return response })
    //Parse response to update values
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    customerID = jsonResponse.customerID;
    console.log(jsonResponse.requestedDeliveryDate);
    document.getElementById("requestedDeliveryDate").value = jsonResponse.requestedDeliveryDate;
    document.getElementById("taxExemption").value = jsonResponse.taxExemption;
    document.getElementById("orderDate").value = new Date().toLocaleDateString();
}

async function fetchCustomer(customer) {
    const response = await fetch('/customerRetrieve', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(customer)
    }).then(response => { return response })
    //Parse response to update values
    const jsonResponse = await response.json();
    document.getElementById("customerName").value = jsonResponse.firstName + " " + jsonResponse.lastName;
    document.getElementById("organization").value = jsonResponse.organization;
    document.getElementById("phone").value = "(" + jsonResponse.phone.substr(0, 3) + ") " + jsonResponse.phone.substr(3, 3) + "-" + jsonResponse.phone.substr(6, 4);
    document.getElementById("email").value = jsonResponse.email;
}

// Get all the Designs
async function getAllDesigns() {
    //Create a design query
    var newDesign = new Design();
    newDesign.orderID = orderID;

    fetchAllDesigns(newDesign)
}


// Update the Garments table
async function getAllGarments(thisDesignNumber, thisDesignID, thisOrderID, thisDesign) {
    //Create a query garment
    var newGarment = new Garment();

    //Setup new garment query
    var newGarment = new Garment();
    newGarment.orderID = thisOrderID;
    newGarment.designID = thisDesignID;

    fetchAllGarments(newGarment, thisDesignNumber, thisDesign)
}


function cloneGarment(thisDesign, garmentNumber) {
    var sourceCard = thisDesign.querySelector('#garment_1');
    var clone = sourceCard.cloneNode(true);

    //Update values for clone
    clone.id = "garment_" + garmentNumber;
    clone.querySelector('#garmentTitle').innerHTML = "Garment " + garmentNumber;

    //Append to Design
    thisDesign.querySelector('#showGarments').appendChild(clone);
}

async function fetchAllGarments(garment, thisDesignNumber) {
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

    var garmentLength = await data.length;

    //Process response
    //Determine Length of Response
    for (let i = 0; i < garmentLength; i++) {
        //Check if  this garment already exists
        var thisDesignLabel = "design_" + thisDesignNumber;
        var thisGarmentNumber = await data[i].garmentNumber;
        var thisGarmentLabel = "#garment_" + thisGarmentNumber;

        var thisDesign = document.getElementById(thisDesignLabel);
        var thisGarment = thisDesign.querySelector(thisGarmentLabel);
        //If the garment doesn't exist then clone design 1 to create this design
        if (thisGarment == null || thisGarment == undefined) {
            cloneGarment(thisDesign, data[i].garmentNumber);
            thisGarment = thisDesign.querySelector(thisGarmentLabel);
        }

        //Update garment with these values
        thisGarment.querySelector('#garmentGender').innerHTML = data[i].garmentGender;
        thisGarment.querySelector('#garmentSize').value = data[i].garmentSize;
        thisGarment.querySelector('#garmentStyleNumber').value = data[i].garmentStyleNumber;
        thisGarment.querySelector('#garmentAmount').value = data[i].garmentAmount;
        thisGarment.querySelector('#garmentCostPer').value = data[i].garmentCostPerItem;
        thisGarment.querySelector('#garmentTotalCost').value = data[i].garmentTotalCost;

        //Add items to Items in Design
        thisDesign.querySelector('#designTotalItems').value = parseInt(thisDesign.querySelector('#designTotalItems').value, 10) + parseInt(data[i].garmentAmount, 10);

        //Add value to Design cost
        thisDesign.querySelector('#designTotalCost').value = parseInt(thisDesign.querySelector('#designTotalCost').value, 10) + parseInt(data[i].garmentTotalCost, 10);
    }
}


async function fetchAllDesigns(design) {
    const data = await fetch('/designAllRetrieve', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(design)
    }).then(data => data.json())
        .then(data => {
            { return data }
        })
        .catch((error) => {
            console.error(error)
        })

    var designLength = await data.length;

    //Determine Length of Response
    for (let i = 0; i < designLength; i++) {
        //Check if  this design already exists
        var thisDesignLabel = "design_" + data[i].designNumber;

        var thisDesign = document.getElementById(thisDesignLabel);

        //If the design doesn't exist then clone design 1 to create this design
        if (thisDesign == null) {
            var clone = document.getElementById("design_1").cloneNode(true);
            clone.id = thisDesignLabel;

            //Append to Design
            document.getElementById("orderReview").appendChild(clone);
        }

        //Update design with these values
        thisDesign.querySelector('#designOf').innerHTML = "Design " + data[i].designNumber;
        thisDesign.querySelector('#description').value = data[i].designDescription;
        thisDesign.querySelector('#designNotes').value = data[i].designNotes;
        //Design Image here
        thisDesign.querySelector('#designType').value = data[i].designType;
        thisDesign.querySelector('#designNumberGarments').value = data[i].designNumberGarments;
        thisDesign.querySelector('#designTotalItems').value = 0;
        thisDesign.querySelector('#designTotalCost').value = 0;

        //If this isn't a garment hide the number of garments
        if (data[i].designType == "Garment") {
            console.log("Show garment");
            //thisDesign.querySelector('showGarments').style.display = "block";
        }
        else {
            console.log("Hide Garment");
            thisDesign.querySelector('showGarments').style.display = "none";
        }
    }


    // Now retrieve all garments for each design
    //This is done second to prevent duplicating unneeded garments from design 1 while its acting as a template
    for (let i = 0; i < designLength; i++) {
        //Select design
        var thisDesignLabel = "design_" + data[i].designNumber;

        var thisDesign = document.getElementById(thisDesignLabel);

        //Retreive all garments for this design
        await getAllGarments(data[i].designNumber, data[i].designID, data[i].orderID);

        //Add items to Total Items
        document.getElementById("totalItems").value = document.getElementById("totalItems").value + thisDesign.querySelector('#designTotalItems').value;

        //Add value to Total cost
        document.getElementById("totalCost").value = document.getElementById("totalCost").value + thisDesign.querySelector('#designTotalCost').value;

    }
}


document.addEventListener("DOMContentLoaded", async function () {
    initialSetup();
});
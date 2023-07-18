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

    //cloneGarment();
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
    //console.log(jsonResponse);
    customerID = jsonResponse.customerID;
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
    //console.log(jsonResponse);
    document.getElementById("customerName").value = jsonResponse.firstName + " " + jsonResponse.lastName;
    document.getElementById("organization").value = jsonResponse.organization;
    document.getElementById("phone").value = "(" + jsonResponse.phone.substr(0, 3) + ")" + jsonResponse.phone.substr(3, 6) + "-" + jsonResponse.phone.substr(6, 9);
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
async function getAllGarments() {
    //Create a query garment
    var newGarment = new Garment(true);

    //Setup new garment query
    var newGarment = new Garment();
    newGarment.orderID = orderID;
    newGarment.designID = designID;

    fetchAllGarments(newGarment)
}


function cloneGarment() {
    var sourceCard = document.getElementById("garment_1_1");
    var clone = sourceCard.cloneNode(true);

    //Update values for clone
    clone.id = "garment_1_2"
    clone.querySelector('#garmentTitle').innerHTML = "Garment 2";
    console.log(clone);
    console.log(clone.querySelector('#garmentTitle'));

    //Append to Design
    document.getElementById("showGarments").appendChild(clone);
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

    var designLenth = await data.length;

    //Determine Length of Response
    for (let i = 0; i < designLenth; i++) {
        //Check if  this design already exists
        var thisDesignLabel = "design_" + data[i].designNumber;

        var thisDesign = document.getElementById(thisDesignLabel);

        //If the design doesn't exist then lone design 1 to create this design
        if (thisDesign == null) {
            var clone = document.getElementById("design_1").cloneNode(true);
            clone.id = thisDesignLabel;

            //Append to Design
            document.getElementById("orderReview").appendChild(clone);
        }

        //Update design with this design
        thisDesign.querySelector('#designOf').innerHTML = "Design " + data[i].designNumber;
        thisDesign.querySelector('#description').value = data[i].designDescription;
        thisDesign.querySelector('#designNotes').value = data[i].designNotes;
        //Design Image here
        thisDesign.querySelector('#designType').value = data[i].designType;
        thisDesign.querySelector('#designNumberGarments').value = data[i].designNumberGarments;

        //If this isn't a garment hide the number of garments
        if (data[i].designType == "Garment") {
            thisDesign.querySelector('showGarments').style.display = "block";
        }
        else {
            thisDesign.querySelector('showGarments').style.display = "none";
        }
    }
}

async function fetchAllGarments(garment) {
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

    //Process response

}




document.addEventListener("DOMContentLoaded", async function () {
    initialSetup();
});
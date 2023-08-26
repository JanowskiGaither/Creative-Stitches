// Handle creating unique IDs

export function createID() {

    var customerID = createCustomerID();
    var orderID = createOrderID();

    //Update stored orderID
    storeOrderID(orderID);

    return [customerID, orderID];
}

export function createCustomerID() {

    // Assume the fields aren't populated
    var firstNameString = "N/A";
    var lastNameString = "N/A";
    var emailNameString = "N/A";

    //Check if the form has values for each field
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById("email");

    if (firstName !== null) {
        firstNameString = firstName.value.toString();
    }

    if (lastName !== null) {
        lastNameString = lastName.value.toString();
    }

    if (email !== null) {
        emailNameString = email.value.toString();
    }

    //Return the customerID
    return firstNameString + "_" + lastNameString + "_" + emailNameString;
}

export function createOrderID(customerID) {
    if (customerID !== null && customerID !== undefined) {
        return customerID.toString() + "_" + new Date().toString();
    }
    else {
        //Return the orderID
        return createCustomerID() + "_" + new Date().toString();
    }
}

export function createDesignID(setDesignNumber) {
    // Assume the fields aren't populated
    var designNumberString = "N/A";
    var orderIDString = "N/A";

    //Check if the form has values for each field
    let designNumber = document.getElementById("designNumber");
    let orderID = document.getElementById("orderID");

    if (orderID !== null) {
        orderIDString = orderID.value.toString();
    }

    if (setDesignNumber !== null && setDesignNumber !== undefined) {
        designNumberString = setDesignNumber.toString();
    }
    else {
        if (designNumber !== null) {
            designNumberString = designNumber.value.toString();
        }
    }

    //Return the designID
    return orderIDString + "_" + designNumberString;
}

export function createGarmentID(setGarmentNumber) {
    // Assume the fields aren't populated
    var garmentNumberString = "N/A";
    var designIDString = "N/A";

    //Check if the form has values for each field
    let designID = document.getElementById("designID");
    let garmentNumber = document.getElementById("garmentNumber");

    if (designID !== null) {
        designIDString = designID.value.toString();
    }

    if (setGarmentNumber !== null && setGarmentNumber !== undefined) {
        garmentNumberString = setGarmentNumber.toString();
    }
    else {
        if (garmentNumber !== null) {
            garmentNumberString = garmentNumber.value.toString();
        }
    }

    //Return the garmentID
    return designIDString + "_" + garmentNumberString;
}

// Update page text based on IDs
export function determineFullName() {
    //Assume the fields aren't populated
    var firstNameString = "";
    var lastNameString = "";

    //Check if the form has values for each field
    let customerName = document.getElementById("customerName");
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");

    if (firstName !== null) {
        firstNameString = firstName.value.toString();
    }

    if (lastName !== null) {
        lastNameString = lastName.value.toString();
    }

    // Update the customer name
    customerName.value = firstNameString + " " + lastNameString;
}


export function determineCurrentDesign() {
    // Assume the fields aren't populated
    var designNumberString = "1";
    var numberOfDesignsString = "1";

    //Check if the form has values for each field
    let currentDesign = document.getElementById("currentDesign");
    let designNumber = document.getElementById("designNumber");
    let numberOfDesigns = document.getElementById("numberOfDesigns");

    if (designNumber !== null) {
        designNumberString = designNumber.value.toString();
    }

    if (numberOfDesigns !== null) {
        numberOfDesignsString = numberOfDesigns.value.toString();
    }

    //Update the current design shown
    if (currentDesign !== null) {
        currentDesign.innerText = "Design " + designNumberString + " of " + numberOfDesignsString;
    }
}

export function determineCurrentGarment() {
    // Assume the fields aren't populated
    var garmentNumberString = "1";
    var designNumberGarmentsString = "1";

    //Check if the form has values for each field
    let currentGarment = document.getElementById("currentGarment");
    let garmentNumber = document.getElementById("garmentNumber");
    let designNumberGarments = document.getElementById("designNumberGarments");

    if (garmentNumber !== null) {
        garmentNumberString = garmentNumber.value.toString();
    }

    if (designNumberGarments !== null) {
        designNumberGarmentsString = designNumberGarments.value.toString();
    }

    //Update the current garment shown
    if (currentGarment !== null) {
        currentGarment.innerText = "Garment " + garmentNumberString + " of " + designNumberGarmentsString;
    }
}

export function updateDeliveryDate() {
    //Check if the form has values for the field
    let requestedDeliveryDate = document.getElementById("requestedDeliveryDate");

    if (requestedDeliveryDate !== null) {
        requestedDeliveryDate.value = requestedDeliveryDate.value.substr(5, 2) + "/" + requestedDeliveryDate.value.substr(8, 2) + "/" + requestedDeliveryDate.value.substr(0, 4);
    }
}

export function updateOrderDate() {
    //Check if the form has values for the field
    let orderDate = document.getElementById("orderDate");

    if (orderDate !== null) {
        let todayDate = new Date();
        let todayYear = todayDate.getFullYear();
        let todayMonth = todayDate.getMonth() + 1; // Months start at 0!
        let todayDay = todayDate.getDate();

        if (todayDay < 10) {
            todayDay = '0' + todayDay;
        }
        if (todayMonth < 10) {
            todayMonth = '0' + todayMonth;
        }

        orderDate.value = todayMonth + '/' + todayDay + '/' + todayYear;
    }
}

// Store and retrieve session variables

export function storeIDs() {
    //Try and store all IDs
    storeCustomerID();
    storeOrderID();
    storeDesignID();
    storeGarmentID();
    storeEmbroideryID();
    storeVinylizeID();
    storeOtherID();
}

export function storeCustomerID(setCustomerID) {
    // Assume the field isn't populated
    var currentCustomerID = "N/A";

    //Check if the form has values for the field
    let customerID = document.getElementById("customerID");

    if (setCustomerID !== null && setCustomerID !== undefined) {
        currentCustomerID = setCustomerID.toString();
    }
    else {
        if (customerID !== null) {
            currentCustomerID = customerID.value;
        }
    }

    // Store the value for future use
    sessionStorage.customerID = currentCustomerID;
}

export function storeOrderID(setOrderID) {
    // Assume the field isn't populated
    var currentOrderID = "N/A";

    //Check if the form has values for the field
    let orderID = document.getElementById("orderID");

    if (setOrderID !== null && setOrderID !== undefined) {
        currentOrderID = setOrderID.toString();
    }
    else {
        if (orderID !== null) {
            currentOrderID = orderID.value;
        }
    }

    // Store the value for future use
    sessionStorage.orderID = currentOrderID;
}

export function storeDesignID(setDesignId) {
    // Assume the field isn't populated
    var currentDesignId = "N/A";

    //Check if the form has values for the field
    let designID = document.getElementById("designID");

    if (setDesignId !== null && setDesignId !== undefined) {
        currentDesignId = setDesignId.toString();
    }
    else {
        if (designID !== null) {
            currentDesignId = designID.value;
        }
    }

    // Store the value for future use
    sessionStorage.designID = currentDesignId;
}

export function storeGarmentID(setGarmentId) {
    // Assume the field isn't populated
    var currentGarmentId = "N/A";

    //Check if the form has values for the field
    let garmentID = document.getElementById("garmentID");

    if (setGarmentId !== null && setGarmentId !== undefined) {
        currentGarmentId = setGarmentId.toString();
    }
    else {
        if (garmentID !== null) {
            currentGarmentId = garmentID.value;
        }
    }

    // Store the value for future use
    sessionStorage.garmentID = currentGarmentId;
}

export function storeEmbroideryID(setEmbroideryID) {
    // Assume the field isn't populated
    var currentEmbroideryID = "N/A";

    //Check if the form has values for the field
    let embroideryID = document.getElementById("embroideryID");

    if (setEmbroideryID !== null && setEmbroideryID !== undefined) {
        currentEmbroideryID = setEmbroideryID.toString();
    }
    else {
        if (embroideryID !== null) {
            currentEmbroideryID = embroideryID.value;
        }
    }

    // Store the value for future use
    sessionStorage.embroideryID = currentEmbroideryID;
}

export function storeVinylizeID(setVinylizeID) {
    // Assume the field isn't populated
    var currentVinylizeID = "N/A";

    //Check if the form has values for the field
    let vinylizeID = document.getElementById("vinylizeID");

    if (setVinylizeID !== null && setVinylizeID !== undefined) {
        currentVinylizeID = setVinylizeID.toString();
    }
    else {
        if (vinylizeID !== null) {
            currentVinylizeID = vinylizeID.value;
        }
    }

    // Store the value for future use
    sessionStorage.vinylizeID = currentVinylizeID;
}

export function storeOtherID(setOtherID) {
    // Assume the field isn't populated
    var currentOtherID = "N/A";

    //Check if the form has values for the field
    let otherID = document.getElementById("otherID");

    if (setOtherID !== null && setOtherID !== undefined) {
        currentOtherID = setOtherID.toString();
    }
    else {
        if (otherID !== null) {
            currentOtherID = otherID.value;
        }
    }

    // Store the value for future use
    sessionStorage.otherID = currentOtherID;
}

export function retrieveIDs() {
    //Try and retrieve all IDs
    retrieveCustomerID();
    retrieveOrderID();
    retrieveDesignID();
    retrieveGarmentID();
    retrieveEmbroideryID();
    retrieveVinlyizeID();
    retrieveOtherID();
}

export function retrieveCustomerID() {
    let customerID = document.getElementById('customerID');

    if (sessionStorage.getItem('customerID') !== null && sessionStorage.getItem('customerID') !== undefined && customerID !== null && customerID !== undefined) {
        customerID.value = sessionStorage.getItem('customerID');
    }
}

export function retrieveOrderID() {
    let orderID = document.getElementById('orderID');

    if (sessionStorage.getItem('orderID') !== null && sessionStorage.getItem('orderID') !== undefined && orderID !== null && orderID !== undefined) {
        orderID.value = sessionStorage.getItem('orderID');
    }
}

export function retrieveDesignID() {
    let designID = document.getElementById('designID');

    if (sessionStorage.getItem('designID') !== null && sessionStorage.getItem('designID') !== undefined && designID !== null && designID !== undefined) {
        designID.value = sessionStorage.getItem('designID');
    }
}

export function retrieveGarmentID() {
    let garmentID = document.getElementById('garmentID');

    if (sessionStorage.getItem('garmentID') !== null && sessionStorage.getItem('garmentID') !== undefined && garmentID !== null && garmentID !== undefined) {
        garmentID.value = sessionStorage.getItem('garmentID');
    }
}

export function retrieveEmbroideryID() {
    let embroideryID = document.getElementById('embroideryID');

    if (sessionStorage.getItem('embroideryID') !== null && sessionStorage.getItem('embroideryID') !== undefined && embroideryID !== null && embroideryID !== undefined) {
        embroideryID.value = sessionStorage.getItem('embroideryID');
    }
}

export function retrieveVinlyizeID() {
    let vinylizeID = document.getElementById('vinylizeID');

    if (sessionStorage.getItem('vinylizeID') !== null && sessionStorage.getItem('vinylizeID') !== undefined && vinylizeID !== null && vinylizeID !== undefined) {
        vinylizeID.value = sessionStorage.getItem('vinylizeID');
    }
}

export function retrieveOtherID() {
    let otherID = document.getElementById('otherID');

    if (sessionStorage.getItem('otherID') !== null && sessionStorage.getItem('otherID') !== undefined && otherID !== null && otherID !== undefined) {
        otherID.value = sessionStorage.getItem('otherID');
    }
}
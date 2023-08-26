//Create all classes for Creative Stitches

// Create Customer Class
export class Customer {
    customerID = "";
    firstName = "";
    lastName = "";
    organization = "";
    phone = "";
    email = "";

    constructor(getFormValues, databaseValues = null, element = null) {
        //Set default values
        this.customerID = "";
        this.firstName = "";
        this.lastName = "";
        this.organization = "";
        this.phone = "";
        this.email = "";

        // Find unique elements within a document
        let customerID = document.getElementById("customerID");
        let firstName = document.getElementById("firstName");
        let lastName = document.getElementById("lastName");
        let organization = document.getElementById("organization");
        let phone = document.getElementById("phone");
        let email = document.getElementById("email");

        // Find elements within an element
        if (element !== null && element !== undefined) {
            var elementCustomerID = element.querySelector('#customerID');
            var elementFirstName = element.querySelector('#firstName');
            var elementLastName = element.querySelector('#lastName');
            var elementOrganization = element.querySelector('#organization');
            var elementPhone = element.querySelector('#phone');
            var elementEmail = element.querySelector('#email');
        }

        if (getFormValues) {
            if (element !== null && element !== undefined) {
                //Pull all existing values from the element for the database
                if (elementCustomerID !== null && elementCustomerID !== undefined) {
                    this.customerID = elementCustomerID.value;
                }

                if (elementFirstName !== null && elementFirstName !== undefined) {
                    this.firstName = elementFirstName.value;
                }

                if (elementLastName !== null && elementLastName !== undefined) {
                    this.lastName = elementLastName.value;
                }

                if (elementOrganization !== null && elementOrganization !== undefined) {
                    this.organization = elementOrganization.value;
                }

                if (elementPhone !== null && elementPhone !== undefined) {
                    this.phone = elementPhone.value;
                }

                if (elementEmail !== null && elementEmail !== undefined) {
                    this.email = elementEmail.value;
                }
            }

            else {
                //Pull all existing values from the form for the database
                if (customerID !== null && customerID !== undefined) {
                    this.customerID = customerID.value;
                }

                if (firstName !== null && firstName !== undefined) {
                    this.firstName = firstName.value;
                }

                if (lastName !== null && lastName !== undefined) {
                    this.lastName = lastName.value;
                }

                if (organization !== null && organization !== undefined) {
                    this.organization = organization.value;
                }

                if (phone !== null && phone !== undefined) {
                    this.phone = phone.value;
                }

                if (email !== null && email !== undefined) {
                    this.email = email.value;
                }
            }
        }
        else {
            //Get all existing values from the database for this class
            if (databaseValues.customerID !== null && databaseValues.customerID !== undefined) {
                this.customerID = databaseValues.customerID;
            }

            if (databaseValues.firstName !== null && databaseValues.firstName !== undefined) {
                this.firstName = databaseValues.firstName;
            }

            if (databaseValues.lastName !== null && databaseValues.lastName !== undefined) {
                this.lastName = databaseValues.lastName;
            }

            if (databaseValues.organization !== null && databaseValues.organization !== undefined) {
                this.organization = databaseValues.organization;
            }

            if (databaseValues.phone !== null && databaseValues.phone !== undefined) {
                this.phone = databaseValues.phone;
            }

            if (databaseValues.email !== null && databaseValues.email !== undefined) {
                this.email = databaseValues.email;
            }

            if (element !== null && element !== undefined) {
                //Update the element with the database values
                if (elementCustomerID !== null && elementCustomerID !== undefined) {
                    elementCustomerID.value = this.customerID;
                }

                if (elementFirstName !== null && elementFirstName !== undefined) {
                    elementFirstName.value = this.firstName;
                }

                if (elementLastName !== null && elementLastName !== undefined) {
                    elementLastName.value = this.lastName;
                }

                if (elementOrganization !== null && elementOrganization !== undefined) {
                    elementOrganization.value = this.organization;
                }

                if (elementPhone !== null && elementPhone !== undefined) {
                    elementPhone.value = this.phone;
                }

                if (elementEmail !== null && elementEmail !== undefined) {
                    elementEmail.value = this.email;
                }
            }
            else {
                //Update the form with the database values
                if (customerID !== null && customerID !== undefined) {
                    customerID.value = this.customerID;
                }

                if (firstName !== null && firstName !== undefined) {
                    firstName.value = this.firstName;
                }

                if (lastName !== null && lastName !== undefined) {
                    lastName.value = this.lastName;
                }

                if (organization !== null && organization !== undefined) {
                    organization.value = this.organization;
                }

                if (phone !== null && phone !== undefined) {
                    phone.value = this.phone;
                }

                if (email !== null && email !== undefined) {
                    email.value = this.email;
                }
            }
        }
    }
}

// Create Order Class
export class Order {
    orderID = "";
    customerID = "";
    orderDescription = "";
    orderDate = "";
    orderStatus = "";
    requestedDeliveryDate = "";
    scheduledDeliveryDate = "";
    taxExemption = "";
    totalItems = "";
    totalMaterialCost = "";
    totalTaxes = "";
    totalProfit = "";
    totalSale = ""

    constructor(getFormValues, databaseValues = null, element = null) {
        //Set default values
        this.orderID = "";
        this.customerID = "";
        this.orderDescription = "";
        this.orderDate = "";
        this.orderStatus = "";
        this.requestedDeliveryDate = "";
        this.scheduledDeliveryDate = "";
        this.taxExemption = "";
        this.totalItems = 0;
        this.totalMaterialCost = 0;
        this.totalTaxes = 0;
        this.totalProfit = 0;
        this.totalSale = 0;

        // Find unique elements within a document
        let orderID = document.getElementById("orderID");
        let customerID = document.getElementById("customerID");
        let orderDescription = document.getElementById("orderDescription");
        let orderDate = document.getElementById("orderDate");
        let orderStatus = document.getElementById("orderStatus");
        let requestedDeliveryDate = document.getElementById("requestedDeliveryDate");
        let scheduledDeliveryDate = document.getElementById("scheduledDeliveryDate");
        let taxExemption = document.getElementById("taxExemption");
        let totalItems = document.getElementById("totalItems");
        let totalMaterialCost = document.getElementById("totalMaterialCost");
        let totalTaxes = document.getElementById("totalTaxes");
        let totalProfit = document.getElementById("totalProfit");
        let totalSale = document.getElementById("totalSale");

        // Find elements within an element
        if (element !== null && element !== undefined) {
            var elementOrderID = element.querySelector('#orderID');
            var elementCustomerID = element.querySelector('#customerID');
            var elementOrderDescription = element.querySelector('#orderDescription');
            var elementOrderDate = element.querySelector('#orderDate');
            var elementOrderStatus = element.querySelector('#orderStatus');
            var elementRequestedDeliveryDate = element.querySelector('#requestedDeliveryDate');
            var elementScheduledDeliveryDate = element.querySelector('#scheduledDeliveryDate');
            var elementTaxExemption = element.querySelector('#taxExemption');
            var elementTotalItems = element.querySelector('#totalItems');
            var elementTotalMaterialCost = element.querySelector('#totalMaterialCost');
            var elementTotalTaxes = element.querySelector('#totalTaxes');
            var elementTotalProfit = element.querySelector('#totalProfit');
            var elementTotalSale = element.querySelector('#totalSale');
        }

        if (getFormValues) {
            if (element !== null && element !== undefined) {
                //Pull all existing values from the element for the database
                if (elementOrderID !== null && elementOrderID !== undefined) {
                    this.orderID = elementOrderID.value;
                }

                if (elementCustomerID !== null && elementCustomerID !== undefined) {
                    this.customerID = elementCustomerID.value;
                }

                if (elementOrderDescription !== null && elementOrderDescription !== undefined) {
                    this.orderDate = elementOrderDescription.value;
                }

                if (elementOrderDate !== null && elementOrderDate !== undefined) {
                    this.orderStatus = elementOrderDate.value;
                }

                if (elementOrderStatus !== null && elementOrderStatus !== undefined) {
                    this.requestedDeliveryDate = elementOrderStatus.value;
                }

                if (elementRequestedDeliveryDate !== null && elementRequestedDeliveryDate !== undefined) {
                    this.scheduledDeliveryDate = elementRequestedDeliveryDate.value;
                }

                if (elementScheduledDeliveryDate !== null && elementScheduledDeliveryDate !== undefined) {
                    this.taxExemption = elementScheduledDeliveryDate.value;
                }

                if (elementTaxExemption !== null && elementTaxExemption !== undefined) {
                    this.totalItems = elementTaxExemption.value;
                }

                if (elementTotalItems !== null && elementTotalItems !== undefined) {
                    this.totalMaterialCost = elementTotalItems.value;
                }

                if (elementTotalMaterialCost !== null && elementTotalMaterialCost !== undefined) {
                    this.totalTaxes = elementTotalMaterialCost.value;
                }

                if (elementTotalTaxes !== null && elementTotalTaxes !== undefined) {
                    this.totalTaxes = elementTotalTaxes.value;
                }

                if (elementTotalProfit !== null && elementTotalProfit !== undefined) {
                    this.totalProfit = elementTotalProfit.value;
                }

                if (elementTotalSale !== null && elementTotalSale !== undefined) {
                    this.totalSale = elementTotalSale.value;
                }
            }
            else {
                //Pull all existing values from the form for the database
                if (orderID !== null && orderID !== undefined) {
                    this.orderID = orderID.value;
                }

                if (customerID !== null && customerID !== undefined) {
                    this.customerID = customerID.value;
                }

                if (orderDescription !== null && orderDescription !== undefined) {
                    this.orderDescription = orderDescription.value;
                }

                if (orderDate !== null && orderDate !== undefined) {
                    this.orderDate = orderDate.value;
                }

                if (orderStatus !== null && orderStatus !== undefined) {
                    this.orderStatus = orderStatus.value;
                }

                if (requestedDeliveryDate !== null && requestedDeliveryDate !== undefined) {
                    this.requestedDeliveryDate = requestedDeliveryDate.value;
                }

                if (scheduledDeliveryDate !== null && scheduledDeliveryDate !== undefined) {
                    this.scheduledDeliveryDate = scheduledDeliveryDate.value;
                }

                if (taxExemption !== null && taxExemption !== undefined) {
                    this.taxExemption = taxExemption.value;
                }

                if (totalItems !== null && totalItems !== undefined) {
                    this.totalItems = totalItems.value;
                }

                if (totalMaterialCost !== null && totalMaterialCost !== undefined) {
                    this.totalMaterialCost = totalMaterialCost.value;
                }

                if (totalTaxes !== null && totalTaxes !== undefined) {
                    this.totalTaxes = totalTaxes.value;
                }

                if (totalProfit !== null && totalProfit !== undefined) {
                    this.totalProfit = totalProfit.value;
                }

                if (totalSale !== null && totalSale !== undefined) {
                    this.totalSale = totalSale.value;
                }
            }
        }
        else {
            //Get all existing values from the database for this class
            if (databaseValues.orderID !== null && databaseValues.orderID !== undefined) {
                this.orderID = databaseValues.orderID;
            }

            if (databaseValues.customerID !== null && databaseValues.customerID !== undefined) {
                this.customerID = databaseValues.customerID;
            }

            if (databaseValues.orderDescription !== null && databaseValues.orderDescription !== undefined) {
                this.orderDescription = databaseValues.orderDescription;
            }

            if (databaseValues.orderDate !== null && databaseValues.orderDate !== undefined) {
                this.orderDate = databaseValues.orderDate;
            }

            if (databaseValues.orderStatus !== null && databaseValues.orderStatus !== undefined) {
                this.orderStatus = databaseValues.orderStatus;
            }

            if (databaseValues.requestedDeliveryDate !== null && databaseValues.requestedDeliveryDate !== undefined) {
                this.requestedDeliveryDate = databaseValues.requestedDeliveryDate;
            }

            if (databaseValues.scheduledDeliveryDate !== null && databaseValues.scheduledDeliveryDate !== undefined) {
                this.scheduledDeliveryDate = databaseValues.scheduledDeliveryDate;
            }

            if (databaseValues.taxExemption !== null && databaseValues.taxExemption !== undefined) {
                this.taxExemption = databaseValues.taxExemption;
            }

            console.log("totalItems");
            console.log(this.totalItems);
            if (databaseValues.totalItems !== null && databaseValues.totalItems !== undefined) {
                this.totalItems = databaseValues.totalItems;
            }

            console.log(this.totalItems);

            if (databaseValues.totalMaterialCost !== null && databaseValues.totalMaterialCost !== undefined) {
                this.totalMaterialCost = databaseValues.totalMaterialCost;
            }

            if (databaseValues.totalTaxes !== null && databaseValues.totalTaxes !== undefined) {
                this.totalTaxes = databaseValues.totalTaxes;
            }

            if (databaseValues.totalProfit !== null && databaseValues.totalProfit !== undefined) {
                this.totalProfit = databaseValues.totalProfit;
            }

            if (databaseValues.totalSale !== null && databaseValues.totalSale !== undefined) {
                this.totalSale = databaseValues.totalSale;
            }

            if (element !== null && element !== undefined) {
                //Update the element with the database values
                if (elementOrderID !== null && elementOrderID !== undefined) {
                    elementOrderID.value = this.orderID;
                }

                if (elementCustomerID !== null && elementCustomerID !== undefined) {
                    elementCustomerID.value = this.customerID;
                }

                if (elementOrderDescription !== null && elementOrderDescription !== undefined) {
                    elementOrderDescription.value = this.orderDescription;
                }

                if (elementOrderDate !== null && elementOrderDate !== undefined) {
                    elementOrderDate.value = this.orderDate;
                }

                if (elementOrderStatus !== null && elementOrderStatus !== undefined) {
                    elementOrderStatus.value = this.orderStatus;
                }

                if (elementRequestedDeliveryDate !== null && elementRequestedDeliveryDate !== undefined) {
                    elementRequestedDeliveryDate.value = this.requestedDeliveryDate;
                }

                if (elementScheduledDeliveryDate !== null && elementScheduledDeliveryDate !== undefined) {
                    elementScheduledDeliveryDate.value = this.scheduledDeliveryDate;
                }

                if (elementTaxExemption !== null && elementTaxExemption !== undefined) {
                    elementTaxExemption.value = this.taxExemption;
                }

                console.log("totalItems");
                console.log(elementTotalItems.value);
                if (elementTotalItems !== null && elementTotalItems !== undefined) {
                    elementTotalItems.value = this.totalItems;
                }
                console.log(elementTotalItems.value);

                if (elementTotalMaterialCost !== null && elementTotalMaterialCost !== undefined) {
                    elementTotalMaterialCost.value = this.totalMaterialCost;
                }

                if (elementTotalTaxes !== null && elementTotalTaxes !== undefined) {
                    elementTotalTaxes.value = this.totalTaxes;
                }

                if (elementTotalProfit !== null && elementTotalProfit !== undefined) {
                    elementTotalProfit.value = this.totalProfit;
                }

                if (elementTotalSale !== null && elementTotalSale !== undefined) {
                    elementTotalSale.value = this.totalSale;
                }
            }
            else {
                //Update the form with the database values
                if (orderID !== null && orderID !== undefined) {
                    orderID.value = this.orderID;
                }

                if (customerID !== null && customerID !== undefined) {
                    customerID.value = this.customerID;
                }

                if (orderDescription !== null && orderDescription !== undefined) {
                    orderDescription.value = this.orderDescription;
                }

                if (orderDate !== null && orderDate !== undefined) {
                    orderDate.value = this.orderDate;
                }

                if (orderStatus !== null && orderStatus !== undefined) {
                    orderStatus.value = this.orderStatus;
                }

                if (requestedDeliveryDate !== null && requestedDeliveryDate !== undefined) {
                    requestedDeliveryDate.value = this.requestedDeliveryDate;
                }

                if (scheduledDeliveryDate !== null && scheduledDeliveryDate !== undefined) {
                    scheduledDeliveryDate.value = this.scheduledDeliveryDate;
                }

                if (taxExemption !== null && taxExemption !== undefined) {
                    taxExemption.value = this.taxExemption;
                }

                if (totalItems !== null && totalItems !== undefined) {
                    totalItems.value = this.totalItems;
                }

                if (totalMaterialCost !== null && totalMaterialCost !== undefined) {
                    totalMaterialCost.value = this.totalMaterialCost;
                }

                if (totalTaxes !== null && totalTaxes !== undefined) {
                    totalTaxes.value = this.totalTaxes;
                }

                if (totalProfit !== null && totalProfit !== undefined) {
                    totalProfit.value = this.totalProfit;
                }

                if (totalSale !== null && totalSale !== undefined) {
                    totalSale.value = this.totalSale;
                }
            }
        }
    }
}

// Create Design Class
export class Design {
    designID = "";
    orderID = "";
    designType = "";
    designDescription = "";
    designNotes = "";
    designImages = "";
    designNumberGarments = 1;
    designNumber = 1;
    designTotalCost = 0;

    constructor(getFormValues, databaseValues = null, element = null) {
        //Set default values
        this.designID = "";
        this.orderID = "";
        this.designType = "";
        this.designDescription = "";
        this.designNotes = "";
        this.designImages = "";
        this.designNumberGarments = 1;
        this.designNumber = 1;
        this.designTotalCost = 0;

        // Find unique elements within a document
        let designID = document.getElementById("designID");
        let orderID = document.getElementById("orderID");
        let designType = document.getElementById("designType");
        let designDescription = document.getElementById("designDescription");
        let designNotes = document.getElementById("designNotes");
        let designImages = document.getElementById("designImages");
        let designNumberGarments = document.getElementById("designNumberGarments");
        let designNumber = document.getElementById("designNumber");
        let designTotalCost = document.getElementById("designTotalCost");

        // Find elements within an element
        if (element !== null && element !== undefined) {
            var elementDesignID = element.querySelector('#designID');
            var elementOrderID = element.querySelector('#orderID');
            var elementDesignType = element.querySelector('#designType');
            var elementDesignDescription = element.querySelector('#designDescription');
            var elementDesignNotes = element.querySelector('#designNotes');
            var elementDesignImages = element.querySelector('#designImages');
            var elementDesignNumberGarments = element.querySelector('#designNumberGarments');
            var elementDesignNumber = element.querySelector('#designNumber');
            var elementDesignTotalCost = element.querySelector('#designTotalCost');
        }

        if (getFormValues) {
            if (element !== null && element !== undefined) {
                //Pull all existing values from the element for the database
                if (elementDesignID !== null && elementDesignID !== undefined) {
                    this.designID = elementDesignID.value;
                }

                if (elementOrderID !== null && elementOrderID !== undefined) {
                    this.orderID = elementOrderID.value;
                }

                if (elementDesignType !== null && elementDesignType !== undefined) {
                    this.designType = elementDesignType.value;
                }

                if (elementDesignDescription !== null && elementDesignDescription !== undefined) {
                    this.designDescription = elementDesignDescription.value;
                }

                if (elementDesignNotes !== null && elementDesignNotes !== undefined) {
                    this.designNotes = elementDesignNotes.value;
                }

                if (elementDesignImages !== null && elementDesignImages !== undefined) {
                    this.designImages = elementDesignImages.value;
                }

                if (elementDesignNumberGarments !== null && elementDesignNumberGarments !== undefined) {
                    this.designNumberGarments = elementDesignNumberGarments.value;
                }

                if (elementDesignNumber !== null && elementDesignNumber !== undefined) {
                    this.designNumber = elementDesignNumber.value;
                }

                if (elementDesignTotalCost !== null && elementDesignTotalCost !== undefined) {
                    this.designTotalCost = elementDesignTotalCost.value;
                }
            }
            else {
                //Pull all existing values from the form for the database;
                if (designID !== null && designID !== undefined) {
                    this.designID = designID.value;
                }

                if (orderID !== null && orderID !== undefined) {
                    this.orderID = orderID.value;
                }

                if (designType !== null && designType !== undefined) {
                    this.designType = designType.value;
                }

                if (designDescription !== null && designDescription !== undefined) {
                    this.designDescription = designDescription.value;
                }

                if (designNotes !== null && designNotes !== undefined) {
                    this.designNotes = designNotes.value;
                }

                if (designImages !== null && designImages !== undefined) {
                    this.designImages = designImages.value;
                }

                if (designNumberGarments !== null && designNumberGarments !== undefined) {
                    this.designNumberGarments = designNumberGarments.value;
                }

                if (designNumber !== null && designNumber !== undefined) {
                    this.designNumber = designNumber.value;
                }

                if (designTotalCost !== null && designTotalCost !== undefined) {
                    this.designTotalCost = designTotalCost.value;
                }
            }
        }
        else {
            //Get all existing values from the database for this class
            if (databaseValues.designID !== null && databaseValues.designID !== undefined) {
                this.designID = databaseValues.designID;
            }

            if (databaseValues.orderID !== null && databaseValues.orderID !== undefined) {
                this.orderID = databaseValues.orderID;
            }

            if (databaseValues.designType !== null && databaseValues.designType !== undefined) {
                this.designType = databaseValues.designType;
            }

            if (databaseValues.designDescription !== null && databaseValues.designDescription !== undefined) {
                this.designDescription = databaseValues.designDescription;
            }

            if (databaseValues.designNotes !== null && databaseValues.designNotes !== undefined) {
                this.designNotes = databaseValues.designNotes;
            }

            if (databaseValues.designImages !== null && databaseValues.designImages !== undefined) {
                this.designImages = databaseValues.designImages;
            }

            if (databaseValues.designNumberGarments !== null && databaseValues.designNumberGarments !== undefined) {
                this.designNumberGarments = databaseValues.designNumberGarments;
            }

            if (databaseValues.designNumber !== null && databaseValues.designNumber !== undefined) {
                this.designNumber = databaseValues.designNumber;
            }

            if (databaseValues.designTotalCost !== null && databaseValues.designTotalCost !== undefined) {
                this.designTotalCost = databaseValues.designTotalCost;
            }

            if (element !== null && element !== undefined) {
                //Update the element with the database values
                if (elementDesignID !== null && elementDesignID !== undefined) {
                    elementDesignID.value = this.designID;
                }

                if (elementOrderID !== null && elementOrderID !== undefined) {
                    elementOrderID.value = this.orderID;
                }

                if (elementDesignType !== null && elementDesignType !== undefined) {
                    elementDesignType.value = this.designType;
                }

                if (elementDesignDescription !== null && elementDesignDescription !== undefined) {
                    elementDesignDescription.value = this.designDescription;
                }

                if (elementDesignNotes !== null && elementDesignNotes !== undefined) {
                    elementDesignNotes.value = this.designNotes;
                }

                if (elementDesignImages !== null && elementDesignImages !== undefined) {
                    elementDesignImages.value = this.designImages;
                }

                if (elementDesignNumberGarments !== null && elementDesignNumberGarments !== undefined) {
                    elementDesignNumberGarments.value = this.designNumberGarments;
                }

                if (elementDesignNumber !== null && elementDesignNumber !== undefined) {
                    elementDesignNumber.value = this.designNumber;
                }

                if (elementDesignTotalCost !== null && elementDesignTotalCost !== undefined) {
                    elementDesignTotalCost.value = this.designTotalCost;
                }
            }
            else {
                //Update the form with the database values
                if (designID !== null && designID !== undefined) {
                    designID.value = this.designID;
                }

                if (orderID !== null && orderID !== undefined) {
                    orderID.value = this.orderID;
                }

                if (designType !== null && designType !== undefined) {
                    designType.value = this.designType;
                }

                if (designDescription !== null && designDescription !== undefined) {
                    designDescription.value = this.designDescription;
                }

                if (designNotes !== null && designNotes !== undefined) {
                    designNotes.value = this.designNotes;
                }

                if (designImages !== null && designImages !== undefined) {
                    designImages.value = this.designImages;
                }

                if (designNumberGarments !== null && designNumberGarments !== undefined) {
                    designNumberGarments.value = this.designNumberGarments;
                }

                if (designNumber !== null && designNumber !== undefined) {
                    designNumber.value = this.designNumber;
                }

                if (designTotalCost !== null && designTotalCost !== undefined) {
                    designTotalCost.value = this.designTotalCost;
                }
            }
        }
    }
}

// Create Garment Class
export class Garment {
    designID = "";
    orderID = "";
    garmentID = "";
    garmentNumberGarments = 1;
    garmentNumber = 1;
    garmentGender = "";
    garmentSize = "";
    garmentStyleNumber = "";
    garmentAmount = 0;
    garmentCostPerItem = 0;
    garmentTotalCost = 0;

    constructor(getFormValues, databaseValues = null, element = null) {
        // Set Default values
        this.designID = "";
        this.orderID = "";
        this.garmentID = "";
        this.garmentNumberGarments = 1;
        this.garmentNumber = 1;
        this.garmentGender = "";
        this.garmentSize = "";
        this.garmentStyleNumber = "";
        this.garmentAmount = 0;
        this.garmentCostPerItem = 0;
        this.garmentTotalCost = 0;

        // Find unique elements within a document
        let designID = document.getElementById("designID");
        let orderID = document.getElementById("orderID");
        let garmentID = document.getElementById("garmentID");
        let garmentNumberGarments = document.getElementById("garmentNumberGarments");
        let garmentNumber = document.getElementById("garmentNumber");
        let garmentGender = document.getElementById("garmentGender");
        let garmentSize = document.getElementById("garmentSize");
        let garmentStyleNumber = document.getElementById("garmentStyleNumber");
        let garmentAmount = document.getElementById("garmentAmount");
        let garmentCostPerItem = document.getElementById("garmentCostPerItem");
        let garmentTotalCost = document.getElementById("garmentTotalCost");

        // Find elements within an element
        if (element !== null && element !== undefined) {
            var elementDesignID = element.querySelector('#designID');
            var elementOrderID = element.querySelector('#orderID');
            var elementGarmentID = element.querySelector('#garmentID');
            var elementGarmentNumberGarments = element.querySelector('#garmentNumberGarments');
            var elementGarmentNumber = element.querySelector('#garmentNumber');
            var elementGarmentGender = element.querySelector('#garmentGender');
            var elementGarmentSize = element.querySelector('#garmentSize');
            var elementGarmentStyleNumber = element.querySelector('#garmentStyleNumber');
            var elementGarmentAmount = element.querySelector('#garmentAmount');
            var elementGarmentCostPerItem = element.querySelector('#garmentCostPerItem');
            var elementGarmentTotalCost = element.querySelector('#garmentTotalCost');
        }

        if (getFormValues) {
            if (element !== null && element !== undefined) {
                //Pull all existing values from the element for the database
                if (elementDesignID !== null && elementDesignID !== undefined) {
                    this.designID = elementDesignID.value;
                }

                if (elementOrderID !== null && elementOrderID !== undefined) {
                    this.orderID = elementOrderID.value;
                }

                if (elementGarmentID !== null && elementGarmentID !== undefined) {
                    this.garmentID = elementGarmentID.value;
                }

                if (elementGarmentNumberGarments !== null && elementGarmentNumberGarments !== undefined) {
                    this.garmentNumberGarments = elementGarmentNumberGarments.value;
                }

                if (elementGarmentNumber !== null && elementGarmentNumber !== undefined) {
                    this.garmentNumber = elementGarmentNumber.value;
                }

                if (elementGarmentGender !== null && elementGarmentGender !== undefined) {
                    this.garmentGender = elementGarmentGender.value;
                }

                if (elementGarmentSize !== null && elementGarmentSize !== undefined) {
                    this.garmentSize = elementGarmentSize.value;
                }

                if (elementGarmentStyleNumber !== null && elementGarmentStyleNumber !== undefined) {
                    this.garmentStyleNumber = elementGarmentStyleNumber.value;
                }

                if (elementGarmentAmount !== null && elementGarmentAmount !== undefined) {
                    this.garmentAmount = elementGarmentAmount.value;
                }

                if (elementGarmentCostPerItem !== null && elementGarmentCostPerItem !== undefined) {
                    this.garmentCostPerItem = elementGarmentCostPerItem.value;
                }

                if (elementGarmentTotalCost !== null && elementGarmentTotalCost !== undefined) {
                    this.garmentTotalCost = elementGarmentTotalCost.value;
                }
            }
            else {
                //Pull all existing values from the form for the database;
                if (designID !== null && designID !== undefined) {
                    this.designID = designID.value;
                }

                if (orderID !== null && orderID !== undefined) {
                    this.orderID = orderID.value;
                }

                if (garmentID !== null && garmentID !== undefined) {
                    this.garmentID = garmentID.value;
                }

                if (garmentNumberGarments !== null && garmentNumberGarments !== undefined) {
                    this.garmentNumberGarments = garmentNumberGarments.value;
                }

                if (garmentNumber !== null && garmentNumber !== undefined) {
                    this.garmentNumber = garmentNumber.value;
                }

                if (garmentGender !== null && garmentGender !== undefined) {
                    this.garmentGender = garmentGender.value;
                }

                if (garmentSize !== null && garmentSize !== undefined) {
                    this.garmentSize = garmentSize.value;
                }

                if (garmentStyleNumber !== null && garmentStyleNumber !== undefined) {
                    this.garmentStyleNumber = garmentStyleNumber.value;
                }

                if (garmentAmount !== null && garmentAmount !== undefined) {
                    this.garmentAmount = garmentAmount.value;
                }

                if (garmentCostPerItem !== null && garmentCostPerItem !== undefined) {
                    this.garmentCostPerItem = garmentCostPerItem.value;
                }

                if (garmentTotalCost !== null && garmentTotalCost !== undefined) {
                    this.garmentTotalCost = garmentTotalCost.value;
                }
            }
        }
        else {
            //Get all existing values from the database for this class
            if (databaseValues.designID !== null && databaseValues.designID !== undefined) {
                this.designID = databaseValues.designID;
            }

            if (databaseValues.orderID !== null && databaseValues.orderID !== undefined) {
                this.orderID = databaseValues.orderID;
            }

            if (databaseValues.garmentID !== null && databaseValues.garmentID !== undefined) {
                this.garmentID = databaseValues.garmentID;
            }

            if (databaseValues.garmentNumberGarments !== null && databaseValues.garmentNumberGarments !== undefined) {
                this.garmentNumberGarments = databaseValues.garmentNumberGarments;
            }

            if (databaseValues.garmentNumberGarments !== null && databaseValues.garmentNumberGarments !== undefined) {
                this.garmentNumberGarments = databaseValues.garmentNumberGarments;
            }

            if (databaseValues.garmentNumber !== null && databaseValues.garmentNumber !== undefined) {
                this.garmentNumber = databaseValues.garmentNumber;
            }

            if (databaseValues.garmentGender !== null && databaseValues.garmentGender !== undefined) {
                this.garmentGender = databaseValues.garmentGender;
            }

            if (databaseValues.garmentSize !== null && databaseValues.garmentSize !== undefined) {
                this.garmentSize = databaseValues.garmentSize;
            }

            if (databaseValues.garmentStyleNumber !== null && databaseValues.garmentStyleNumber !== undefined) {
                this.garmentStyleNumber = databaseValues.garmentStyleNumber;
            }

            if (databaseValues.garmentAmount !== null && databaseValues.garmentAmount !== undefined) {
                this.garmentAmount = databaseValues.garmentAmount;
            }

            if (databaseValues.garmentCostPerItem !== null && databaseValues.garmentCostPerItem !== undefined) {
                this.garmentCostPerItem = databaseValues.garmentCostPerItem;
            }

            if (databaseValues.garmentTotalCost !== null && databaseValues.garmentTotalCost !== undefined) {
                this.garmentTotalCost = databaseValues.garmentTotalCost;
            }

            if (element !== null && element !== undefined) {
                //Update the element with the database values
                if (elementDesignID !== null && elementDesignID !== undefined) {
                    elementDesignID.value = this.designID;
                }

                if (elementOrderID !== null && elementOrderID !== undefined) {
                    elementOrderID.value = this.orderID;
                }

                if (elementGarmentID !== null && elementGarmentID !== undefined) {
                    elementGarmentID.value = this.garmentID;
                }

                if (elementGarmentNumberGarments !== null && elementGarmentNumberGarments !== undefined) {
                    elementGarmentNumberGarments.value = this.garmentNumberGarments;
                }

                if (elementGarmentNumber !== null && elementGarmentNumber !== undefined) {
                    elementGarmentNumber.value = this.garmentNumber;
                }

                if (elementGarmentGender !== null && elementGarmentGender !== undefined) {
                    elementGarmentGender.value = this.garmentGender;
                }

                if (elementGarmentSize !== null && elementGarmentSize !== undefined) {
                    elementGarmentSize.value = this.garmentSize;
                }

                if (elementGarmentStyleNumber !== null && elementGarmentStyleNumber !== undefined) {
                    elementGarmentStyleNumber.value = this.garmentStyleNumber;
                }

                if (elementGarmentAmount !== null && elementGarmentAmount !== undefined) {
                    elementGarmentAmount.value = this.garmentAmount;
                }

                if (elementGarmentCostPerItem !== null && elementGarmentCostPerItem !== undefined) {
                    elementGarmentCostPerItem.value = this.garmentCostPerItem;
                }

                if (elementGarmentTotalCost !== null && elementGarmentTotalCost !== undefined) {
                    elementGarmentTotalCost.value = this.garmentTotalCost;
                }
            }
            else {
                //Update the form with the database values
                if (designID !== null && designID !== undefined) {
                    designID.value = this.designID;
                }

                if (orderID !== null && orderID !== undefined) {
                    orderID.value = this.orderID;
                }

                if (garmentID !== null && garmentID !== undefined) {
                    garmentID.value = this.garmentID;
                }

                if (garmentNumberGarments !== null && garmentNumberGarments !== undefined) {
                    garmentNumberGarments.value = this.garmentNumberGarments;
                }

                if (garmentNumber !== null && garmentNumber !== undefined) {
                    garmentNumber.value = this.garmentNumber;
                }

                if (garmentGender !== null && garmentGender !== undefined) {
                    garmentGender.value = this.garmentGender;
                }

                if (garmentSize !== null && garmentSize !== undefined) {
                    garmentSize.value = this.garmentSize;
                }

                if (garmentStyleNumber !== null && garmentStyleNumber !== undefined) {
                    garmentStyleNumber.value = this.garmentStyleNumber;
                }

                if (garmentAmount !== null && garmentAmount !== undefined) {
                    garmentAmount.value = this.garmentAmount;
                }

                if (garmentCostPerItem !== null && garmentCostPerItem !== undefined) {
                    garmentCostPerItem.value = this.garmentCostPerItem;
                }

                if (garmentTotalCost !== null && garmentTotalCost !== undefined) {
                    garmentTotalCost.value = this.garmentTotalCost;
                }
            }
        }
    }
}

// Create Embroidery Class
export class Embroidery {
    designID = "";
    embroideryID = "";
    embroideryJobDescription = "";
    embroideryAmount = 0;
    embroideryThread = "";
    embroideryMaterial = "";
    embroideryCostPerItem = 0;
    embroideryTotalCost = 0;

    constructor(getFormValues, databaseValues = null, element = null) {
        // Set default values
        this.designID = "";
        this.embroideryID = "";
        this.embroideryJobDescription = "";
        this.embroideryAmount = 0;
        this.embroideryThread = "";
        this.embroideryMaterial = "";
        this.embroideryCostPerItem = 0;
        this.embroideryTotalCost = 0;

        // Find unique elements within a document
        let designID = document.getElementById("designID");
        let embroideryID = document.getElementById("embroideryID");
        let embroideryJobDescription = document.getElementById("embroideryJobDescription");
        let embroideryAmount = document.getElementById("embroideryAmount");
        let embroideryThread = document.getElementById("embroideryThread");
        let embroideryMaterial = document.getElementById("embroideryMaterial");
        let embroideryCostPerItem = document.getElementById("embroideryCostPerItem");
        let embroideryTotalCost = document.getElementById("embroideryTotalCost");

        // Find elements within an element
        if (element !== null && element !== undefined) {
            var elementDesignID = element.querySelector('#designID');
            var elementEmbroideryID = element.querySelector('#embroideryID');
            var elementEmbroideryJobDescription = element.querySelector('#embroideryJobDescription');
            var elementEmbroideryAmount = element.querySelector('#embroideryAmount');
            var elementEmbroideryThread = element.querySelector('#embroideryThread');
            var elementEmbroideryMaterial = element.querySelector('#embroideryMaterial');
            var elementEmbroideryCostPerItem = element.querySelector('#embroideryCostPerItem');
            var elementEmbroideryTotalCost = element.querySelector('#embroideryTotalCost');
        }

        if (getFormValues) {
            if (element !== null && element !== undefined) {
                //Pull all existing values from the element for the database
                if (elementDesignID !== null && elementDesignID !== undefined) {
                    this.designID = elementDesignID.value;
                }

                if (elementEmbroideryID !== null && elementEmbroideryID !== undefined) {
                    this.embroideryID = elementEmbroideryID.value;
                }

                if (elementEmbroideryJobDescription !== null && elementEmbroideryJobDescription !== undefined) {
                    this.embroideryJobDescription = elementEmbroideryJobDescription.value;
                }

                if (elementEmbroideryAmount !== null && elementEmbroideryAmount !== undefined) {
                    this.embroideryAmount = elementEmbroideryAmount.value;
                }

                if (elementEmbroideryThread !== null && elementEmbroideryThread !== undefined) {
                    this.embroideryThread = elementEmbroideryThread.value;
                }

                if (elementEmbroideryMaterial !== null && elementEmbroideryMaterial !== undefined) {
                    this.embroideryMaterial = elementEmbroideryMaterial.value;
                }

                if (elementEmbroideryCostPerItem !== null && elementEmbroideryCostPerItem !== undefined) {
                    this.embroideryCostPerItem = elementEmbroideryCostPerItem.value;
                }

                if (elementEmbroideryTotalCost !== null && elementEmbroideryTotalCost !== undefined) {
                    this.embroideryTotalCost = elementEmbroideryTotalCost.value;
                }
            }
            else {
                //Pull all existing values from the form for the database;
                if (designID !== null && designID !== undefined) {
                    this.designID = designID.value;
                }

                if (embroideryID !== null && embroideryID !== undefined) {
                    this.embroideryID = embroideryID.value;
                }

                if (embroideryJobDescription !== null && embroideryJobDescription !== undefined) {
                    this.embroideryJobDescription = embroideryJobDescription.value;
                }

                if (embroideryAmount !== null && embroideryAmount !== undefined) {
                    this.embroideryAmount = embroideryAmount.value;
                }

                if (embroideryThread !== null && embroideryThread !== undefined) {
                    this.embroideryThread = embroideryThread.value;
                }

                if (embroideryMaterial !== null && embroideryMaterial !== undefined) {
                    this.embroideryMaterial = embroideryMaterial.value;
                }

                if (embroideryCostPerItem !== null && embroideryCostPerItem !== undefined) {
                    this.embroideryCostPerItem = embroideryCostPerItem.value;
                }

                if (embroideryTotalCost !== null && embroideryTotalCost !== undefined) {
                    this.embroideryTotalCost = embroideryTotalCost.value;
                }
            }
        }
        else {
            //Get all existing values from the database for this class

            if (databaseValues.designID !== null && databaseValues.designID !== undefined) {
                this.designID = databaseValues.designID;
            }

            if (databaseValues.embroideryID !== null && databaseValues.embroideryID !== undefined) {
                this.embroideryID = databaseValues.embroideryID;
            }

            if (databaseValues.embroideryJobDescription !== null && databaseValues.embroideryJobDescription !== undefined) {
                this.embroideryJobDescription = databaseValues.embroideryJobDescription;
            }

            if (databaseValues.embroideryAmount !== null && databaseValues.embroideryAmount !== undefined) {
                this.embroideryAmount = databaseValues.embroideryAmount;
            }

            if (databaseValues.embroideryThread !== null && databaseValues.embroideryThread !== undefined) {
                this.embroideryThread = databaseValues.embroideryThread;
            }

            if (databaseValues.embroideryMaterial !== null && databaseValues.embroideryMaterial !== undefined) {
                this.embroideryMaterial = databaseValues.embroideryMaterial;
            }

            if (databaseValues.embroideryCostPerItem !== null && databaseValues.embroideryCostPerItem !== undefined) {
                this.embroideryCostPerItem = databaseValues.embroideryCostPerItem;
            }

            if (databaseValues.embroideryTotalCost !== null && databaseValues.embroideryTotalCost !== undefined) {
                this.embroideryTotalCost = databaseValues.embroideryTotalCost;
            }

            if (element !== null && element !== undefined) {
                //Update the element with the database values
                if (elementDesignID !== null && elementDesignID !== undefined) {
                    elementDesignID.value = this.designID;
                }

                if (elementEmbroideryID !== null && elementEmbroideryID !== undefined) {
                    elementEmbroideryID.value = this.embroideryID;
                }

                if (elementEmbroideryJobDescription !== null && elementEmbroideryJobDescription !== undefined) {
                    elementEmbroideryJobDescription.value = this.embroideryJobDescription;
                }

                if (elementEmbroideryAmount !== null && elementEmbroideryAmount !== undefined) {
                    elementEmbroideryAmount.value = this.embroideryAmount;
                }

                if (elementEmbroideryThread !== null && elementEmbroideryThread !== undefined) {
                    elementEmbroideryThread.value = this.embroideryThread;
                }

                if (elementEmbroideryMaterial !== null && elementEmbroideryMaterial !== undefined) {
                    elementEmbroideryMaterial.value = this.embroideryMaterial;
                }

                if (elementEmbroideryCostPerItem !== null && elementEmbroideryCostPerItem !== undefined) {
                    elementEmbroideryCostPerItem.value = this.embroideryCostPerItem;
                }

                if (elementEmbroideryTotalCost !== null && elementEmbroideryTotalCost !== undefined) {
                    elementEmbroideryTotalCost.value = this.embroideryTotalCost;
                }
            }
            else {
                //Update the form with the database values
                if (designID !== null && designID !== undefined) {
                    designID.value = this.designID;
                }

                if (embroideryID !== null && embroideryID !== undefined) {
                    embroideryID.value = this.embroideryID;
                }

                if (embroideryJobDescription !== null && embroideryJobDescription !== undefined) {
                    embroideryJobDescription.value = this.embroideryJobDescription;
                }

                if (embroideryAmount !== null && embroideryAmount !== undefined) {
                    embroideryAmount.value = this.embroideryAmount;
                }

                if (embroideryThread !== null && embroideryThread !== undefined) {
                    embroideryThread.value = this.embroideryThread;
                }

                if (embroideryMaterial !== null && embroideryMaterial !== undefined) {
                    embroideryMaterial.value = this.embroideryMaterial;
                }

                if (embroideryCostPerItem !== null && embroideryCostPerItem !== undefined) {
                    embroideryCostPerItem.value = this.embroideryCostPerItem;
                }

                if (embroideryTotalCost !== null && embroideryTotalCost !== undefined) {
                    embroideryTotalCost.value = this.embroideryTotalCost;
                }
            }
        }
    }
}

// Create Vinylize Class
export class Vinylize {
    designID = "";
    vinylizeID = "";
    vinylizeJobDescription = "";
    vinylizeAmount = 0;
    vinylizeCostPerItem = 0;
    vinylizeTotalCost = 0;

    constructor(getFormValues, databaseValues = null, element = null) {
        // Set default values
        this.designID = "";
        this.vinylizeID = "";
        this.vinylizeJobDescription = "";
        this.vinylizeAmount = 0;
        this.vinylizeCostPerItem = 0;
        this.vinylizeTotalCost = 0;

        // Find unique elements within a document
        let designID = document.getElementById("designID ");
        let vinylizeID = document.getElementById("vinylizeID ");
        let vinylizeJobDescription = document.getElementById("vinylizeJobDescription ");
        let vinylizeAmount = document.getElementById("vinylizeAmount ");
        let vinylizeCostPerItem = document.getElementById("vinylizeCostPerItem ");
        let vinylizeTotalCost = document.getElementById("vinylizeTotalCost ");

        // Find elements within an element
        if (element !== null && element !== undefined) {
            var elementDesignID = element.querySelector('#designID');
            var elementVinylizeID = element.querySelector('#vinylizeID');
            var elementVinylizeJobDescription = element.querySelector('#vinylizeJobDescription');
            var elementinylizeAmount = element.querySelector('#vinylizeAmount');
            var elementVinylizeCostPerItem = element.querySelector('#vinylizeCostPerItem');
            var elementVinylizeTotalCost = element.querySelector('#vinylizeTotalCost');
        }

        if (getFormValues) {
            if (element !== null && element !== undefined) {
                //Pull all existing values from the element for the database
                if (elementDesignID !== null && elementDesignID !== undefined) {
                    this.designID = elementDesignID.value;
                }

                if (elementVinylizeID !== null && elementVinylizeID !== undefined) {
                    this.vinylizeID = elementVinylizeID.value;
                }

                if (elementVinylizeJobDescription !== null && elementVinylizeJobDescription !== undefined) {
                    this.vinylizeJobDescription = elementVinylizeJobDescription.value;
                }

                if (elementinylizeAmount !== null && elementinylizeAmount !== undefined) {
                    this.vinylizeAmount = elementinylizeAmount.value;
                }

                if (elementVinylizeCostPerItem !== null && elementVinylizeCostPerItem !== undefined) {
                    this.vinylizeCostPerItem = elementVinylizeCostPerItem.value;
                }

                if (elementVinylizeTotalCost !== null && elementVinylizeTotalCost !== undefined) {
                    this.vinylizeCostPerItem = elementVinylizeTotalCost.value;
                }
            }
            else {

                //Pull all existing values from the form for the database;
                if (designID !== null && designID !== undefined) {
                    this.designID = designID.value;
                }

                if (vinylizeID !== null && vinylizeID !== undefined) {
                    this.vinylizeID = vinylizeID.value;
                }

                if (vinylizeJobDescription !== null && vinylizeJobDescription !== undefined) {
                    this.vinylizeJobDescription = vinylizeJobDescription.value;
                }

                if (vinylizeAmount !== null && vinylizeAmount !== undefined) {
                    this.vinylizeAmount = vinylizeAmount.value;
                }

                if (vinylizeCostPerItem !== null && vinylizeCostPerItem !== undefined) {
                    this.vinylizeCostPerItem = vinylizeCostPerItem.value;
                }

                if (vinylizeTotalCost !== null && vinylizeTotalCost !== undefined) {
                    this.vinylizeTotalCost = vinylizeTotalCost.value;
                }
            }
        }
        else {
            //Get all existing values from the database for this class

            if (databaseValues.designID !== null && databaseValues.designID !== undefined) {
                this.designID = databaseValues.designID;
            }

            if (databaseValues.vinylizeID !== null && databaseValues.vinylizeID !== undefined) {
                this.vinylizeID = databaseValues.vinylizeID;
            }

            if (databaseValues.vinylizeJobDescription !== null && databaseValues.vinylizeJobDescription !== undefined) {
                this.vinylizeJobDescription = databaseValues.vinylizeJobDescription;
            }

            if (databaseValues.vinylizeAmount !== null && databaseValues.vinylizeAmount !== undefined) {
                this.vinylizeAmount = databaseValues.vinylizeAmount;
            }

            if (databaseValues.vinylizeCostPerItem !== null && databaseValues.vinylizeCostPerItem !== undefined) {
                this.vinylizeCostPerItem = databaseValues.vinylizeCostPerItem;
            }

            if (databaseValues.vinylizeTotalCost !== null && databaseValues.vinylizeTotalCost !== undefined) {
                this.vinylizeTotalCost = databaseValues.vinylizeTotalCost;
            }

            if (element !== null && element !== undefined) {
                //Update the element with the database values
                if (elementDesignID !== null && elementDesignID !== undefined) {
                    elementDesignID.value = this.designID;
                }

                if (elementVinylizeID !== null && elementVinylizeID !== undefined) {
                    elementVinylizeID.value = this.vinylizeID;
                }

                if (elementVinylizeJobDescription !== null && elementVinylizeJobDescription !== undefined) {
                    elementVinylizeJobDescription.value = this.vinylizeJobDescription;
                }

                if (elementinylizeAmount !== null && elementinylizeAmount !== undefined) {
                    elementinylizeAmount.value = this.vinylizeAmount;
                }

                if (elementVinylizeCostPerItem !== null && elementVinylizeCostPerItem !== undefined) {
                    elementVinylizeCostPerItem.value = this.vinylizeCostPerItem;
                }

                if (elementVinylizeTotalCost !== null && elementVinylizeTotalCost !== undefined) {
                    elementVinylizeTotalCost.value = this.vinylizeTotalCost;
                }
            }
            else {
                //Update the form with the database values
                if (designID !== null && designID !== undefined) {
                    designID.value = this.designID;
                }

                if (vinylizeID !== null && vinylizeID !== undefined) {
                    vinylizeID.value = this.vinylizeID;
                }

                if (vinylizeJobDescription !== null && vinylizeJobDescription !== undefined) {
                    vinylizeJobDescription.value = this.vinylizeJobDescription;
                }

                if (vinylizeAmount !== null && vinylizeAmount !== undefined) {
                    vinylizeAmount.value = this.vinylizeAmount;
                }

                if (vinylizeCostPerItem !== null && vinylizeCostPerItem !== undefined) {
                    vinylizeCostPerItem.value = this.vinylizeCostPerItem;
                }

                if (vinylizeTotalCost !== null && vinylizeTotalCost !== undefined) {
                    vinylizeTotalCost.value = this.vinylizeTotalCost;
                }
            }
        }
    }
}

// Create Other Class
export class Other {
    designID = "";
    orderID = "";
    otherID = "";
    otherJobDescription = "";
    otherAmount = 0;
    otherCostPerItem = 0;
    otherTotalCost = 0;

    constructor(getFormValues, databaseValues = null, element = null) {
        // Set default values
        this.designID = "";
        this.orderID = "";
        this.otherID = "";
        this.otherJobDescription = "";
        this.otherAmount = 0;
        this.otherCostPerItem = 0;
        this.otherTotalCost = 0;

        // Find unique elements within a document
        let designID = document.getElementById("designID");
        let orderID = document.getElementById("orderID");
        let otherID = document.getElementById("otherID");
        let otherJobDescription = document.getElementById("otherJobDescription");
        let otherAmount = document.getElementById("otherAmount");
        let otherCostPerItem = document.getElementById("otherCostPerItem");
        let otherTotalCost = document.getElementById("otherTotalCost");

        // Find elements within an element
        if (element !== null && element !== undefined) {
            var elementDesignID = element.querySelector('#designID');
            var elementOrderID = element.querySelector('#orderID');
            var elementOtherID = element.querySelector('#otherID');
            var elementOtherJobDescription = element.querySelector('#otherJobDescription');
            var elementOtherAmount = element.querySelector('#otherAmount');
            var elementOtherCostPerItem = element.querySelector('#otherCostPerItem');
            var elementOtherTotalCost = element.querySelector('#otherTotalCost');
        }

        if (getFormValues) {
            if (element !== null && element !== undefined) {
                //Pull all existing values from the element for the database
                if (elementDesignID !== null && elementDesignID !== undefined) {
                    this.designID = elementDesignID.value;
                }

                if (elementOrderID !== null && elementOrderID !== undefined) {
                    this.orderID = elementOrderID.value;
                }

                if (elementOtherID !== null && elementOtherID !== undefined) {
                    this.otherID = elementOtherID.value;
                }

                if (elementOtherJobDescription !== null && elementOtherJobDescription !== undefined) {
                    this.otherJobDescription = elementOtherJobDescription.value;
                }

                if (elementOtherAmount !== null && elementOtherAmount !== undefined) {
                    this.otherAmount = elementOtherAmount.value;
                }

                if (elementOtherCostPerItem !== null && elementOtherCostPerItem !== undefined) {
                    this.otherCostPerItem = elementOtherCostPerItem.value;
                }

                if (elementOtherTotalCost !== null && elementOtherTotalCost !== undefined) {
                    this.otherTotalCost = elementOtherTotalCost.value;
                }
            }
            else {
                //Pull all existing values from the form for the database
                if (designID !== null && designID !== undefined) {
                    this.designID = designID.value;
                }

                if (orderID !== null && orderID !== undefined) {
                    this.orderID = orderID.value;
                }

                if (otherID !== null && otherID !== undefined) {
                    this.otherID = otherID.value;
                }

                if (otherJobDescription !== null && otherJobDescription !== undefined) {
                    this.otherJobDescription = otherJobDescription.value;
                }

                if (otherAmount !== null && otherAmount !== undefined) {
                    this.otherAmount = otherAmount.value;
                }

                if (otherCostPerItem !== null && otherCostPerItem !== undefined) {
                    this.otherCostPerItem = otherCostPerItem.value;
                }

                if (otherTotalCost !== null && otherTotalCost !== undefined) {
                    this.otherTotalCost = otherTotalCost.value;
                }
            }
        }
        else {
            //Get all existing values from the database for this class

            if (databaseValues.designID !== null && databaseValues.designID !== undefined) {
                this.designID = databaseValues.designID;
            }

            if (databaseValues.orderID !== null && databaseValues.orderID !== undefined) {
                this.orderID = databaseValues.orderID;
            }

            if (databaseValues.otherID !== null && databaseValues.otherID !== undefined) {
                this.otherID = databaseValues.otherID;
            }

            if (databaseValues.otherJobDescription !== null && databaseValues.otherJobDescription !== undefined) {
                this.otherJobDescription = databaseValues.otherJobDescription;
            }

            if (databaseValues.otherAmount !== null && databaseValues.otherAmount !== undefined) {
                this.otherAmount = databaseValues.otherAmount;
            }

            if (databaseValues.otherCostPerItem !== null && databaseValues.otherCostPerItem !== undefined) {
                this.otherCostPerItem = databaseValues.otherCostPerItem;
            }

            if (databaseValues.otherTotalCost !== null && databaseValues.otherTotalCost !== undefined) {
                this.otherTotalCost = databaseValues.otherTotalCost;
            }

            if (element !== null && element !== undefined) {
                //Update the element with the database values
                if (elementDesignID !== null && elementDesignID !== undefined) {
                    elementDesignID.value = this.designID;
                }

                if (elementOrderID !== null && elementOrderID !== undefined) {
                    elementOrderID.value = this.orderID;
                }

                if (elementOtherID !== null && elementOtherID !== undefined) {
                    elementOtherID.value = this.otherID;
                }

                if (elementOtherJobDescription !== null && elementOtherJobDescription !== undefined) {
                    elementOtherJobDescription.value = this.otherJobDescription;
                }

                if (elementOtherAmount !== null && elementOtherAmount !== undefined) {
                    elementOtherAmount.value = this.otherAmount;
                }

                if (elementOtherCostPerItem !== null && elementOtherCostPerItem !== undefined) {
                    elementOtherCostPerItem.value = this.otherCostPerItem;
                }

                if (elementOtherTotalCost !== null && elementOtherTotalCost !== undefined) {
                    elementOtherTotalCost.value = this.otherTotalCost;
                }
            }
            else {
                //Update the element with the database values
                if (designID !== null && designID !== undefined) {
                    designID.value = this.designID;
                }

                if (orderID !== null && orderID !== undefined) {
                    orderID.value = this.orderID;
                }

                if (otherID !== null && otherID !== undefined) {
                    otherID.value = this.otherID;
                }

                if (otherJobDescription !== null && otherJobDescription !== undefined) {
                    otherJobDescription.value = this.otherJobDescription;
                }

                if (otherAmount !== null && otherAmount !== undefined) {
                    otherAmount.value = this.otherAmount;
                }

                if (otherCostPerItem !== null && otherCostPerItem !== undefined) {
                    otherCostPerItem.value = this.otherCostPerItem;
                }

                if (otherTotalCost !== null && otherTotalCost !== undefined) {
                    otherTotalCost.value = this.otherTotalCost;
                }
            }
        }
    }
}
//Create all classes for Creative Stitches

// Create Order Class
export class Order {
    orderID = null;
    customerID = null;
    orderDescription = null;
    orderDate = null;
    orderStatus = null;
    requestedDeliveryDate = null;
    scheduledDeliveryDate = null;
    taxExemption = null;
    totalItems = null;
    totalMaterialCost = null;
    totalTaxes = null;
    totalProfit = null;
    totalSale = null;

    constructor(getFormValues, databaseValues = null) {
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

        if (getFormValues) {
            //Pull all existing values from the form for the database
            if (orderID !== null) {
                this.orderID = orderID.value;
            }

            if (customerID !== null) {
                this.customerID = customerID.value;
            }

            if (orderDescription !== null) {
                this.orderDescription = orderDescription.value;
            }

            if (orderDate !== null) {
                this.orderDate = orderDate.value;
            }

            if (orderStatus !== null) {
                this.orderStatus = orderStatus.value;
            }

            if (requestedDeliveryDate !== null) {
                this.requestedDeliveryDate = requestedDeliveryDate.value;
            }

            if (scheduledDeliveryDate !== null) {
                this.scheduledDeliveryDate = scheduledDeliveryDate.value;
            }

            if (taxExemption !== null) {
                this.taxExemption = taxExemption.value;
            }

            if (totalItems !== null) {
                this.totalItems = totalItems.value;
            }

            if (totalMaterialCost !== null) {
                this.totalMaterialCost = totalMaterialCost.value;
            }

            if (totalTaxes !== null) {
                this.totalTaxes = totalTaxes.value;
            }

            if (totalProfit !== null) {
                this.totalProfit = totalProfit.value;
            }

            if (totalSale !== null) {
                this.totalSale = totalSale.value;
            }
        }
        else {
            //Get all existing values from the database for this class
            this.orderID = databaseValues.orderID;
            this.customerID = databaseValues.customerID;
            this.orderDescription = databaseValues.orderDescription;
            this.orderDate = databaseValues.orderDate;
            this.orderStatus = databaseValues.orderStatus;
            this.requestedDeliveryDate = databaseValues.requestedDeliveryDate;
            this.scheduledDeliveryDate = databaseValues.scheduledDeliveryDate;
            this.taxExemption = databaseValues.taxExemption;
            this.totalItems = databaseValues.totalItems;
            this.totalMaterialCost = databaseValues.totalMaterialCost;
            this.totalTaxes = databaseValues.totalTaxes;
            this.totalProfit = databaseValues.totalProfit;
            this.totalSale = databaseValues.totalSale;

            if (orderID !== null) {
                orderID.value = this.orderID;
            }

            if (customerID !== null) {
                customerID.value = this.customerID;
            }

            if (orderDescription !== null) {
                orderDescription.value = this.orderDescription;
            }

            if (orderDate !== null) {
                orderDate.value = this.orderDate;
            }

            if (orderStatus !== null) {
                orderStatus.value = this.orderStatus;
            }

            if (requestedDeliveryDate !== null) {
                requestedDeliveryDate.value = this.requestedDeliveryDate;
            }

            if (scheduledDeliveryDate !== null) {
                scheduledDeliveryDate.value = this.scheduledDeliveryDate;
            }

            if (taxExemption !== null) {
                taxExemption.value = this.taxExemption;
            }

            if (totalItems !== null) {
                totalItems.value = this.totalItems;
            }

            if (totalMaterialCost !== null) {
                totalMaterialCost.value = this.totalMaterialCost;
            }

            if (totalTaxes !== null) {
                totalTaxes.value = this.totalTaxes;
            }

            if (totalProfit !== null) {
                totalProfit.value = this.totalProfit;
            }

            if (totalSale !== null) {
                totalSale.value = this.totalSale;
            }
        }
    }
}

// Create Customer Class
export class Customer {
    customerID = null;
    firstName = null;
    lastName = null;
    organization = null;
    phone = null;
    email = null;

    constructor(getFormValues, databaseValues = null) {
        let customerID = document.getElementById("customerID");
        let firstName = document.getElementById("firstName");
        let lastName = document.getElementById("lastName");
        let organization = document.getElementById("organization");
        let phone = document.getElementById("phone");
        let email = document.getElementById("email");

        if (getFormValues) {
            //Pull all existing values from the form for the database;
            if (customerID !== null) {
                this.customerID = customerID.value
            }

            if (firstName !== null) {
                this.firstName = firstName.value
            }

            if (lastName !== null) {
                this.lastName = lastName.value
            }

            if (organization !== null) {
                this.organization = organization.value
            }

            if (phone !== null) {
                this.phone = phone.value
            }

            if (email !== null) {
                this.email = email.value
            }
        }
        else {
            //Get all existing values from the database for this class
            this.customerID = databaseValues.customerID;
            this.firstName = databaseValues.firstName;
            this.lastName = databaseValues.lastName;
            this.organization = databaseValues.organization;
            this.phone = databaseValues.phone;
            this.email = databaseValues.email;

            //Update the form with the class values
            if (customerID !== null) {
                customerID.value = this.customerID;
            }

            if (firstName !== null) {
                firstName.value = this.firstName;
            }

            if (lastName !== null) {
                lastName.value = this.lastName;
            }

            if (organization !== null) {
                organization.value = this.organization;
            }

            if (phone !== null) {
                phone.value = this.phone;
            }

            if (email !== null) {
                email.value = this.email;
            }
        }
    }
}

// Create Design Class
export class Design {
    designID = null;
    orderID = null;
    designType = null;
    designDescription = null;
    designNotes = null;
    designImages = null;
    designNumberGarments = 1;
    designNumber = 1;
    designTotalCost = null;

    constructor(getFormValues, databaseValues = null) {
        let designID = document.getElementById("designID");
        let orderID = document.getElementById("orderID");
        let designType = document.getElementById("designType");
        let designDescription = document.getElementById("designDescription");
        let designNotes = document.getElementById("designNotes");
        let designImages = document.getElementById("designImages");
        let designNumberGarments = document.getElementById("designNumberGarments");
        let designNumber = document.getElementById("designNumber");
        let designTotalCost = document.getElementById("designTotalCost");

        if (getFormValues) {
            //Pull all existing values from the form for the database;
            if (designID !== null) {
                this.designID = designID.value
            }

            if (orderID !== null) {
                this.orderID = orderID.value
            }

            if (designType !== null) {
                this.designType = designType.value
            }

            if (designDescription !== null) {
                this.designDescription = designDescription.value
            }

            if (designNotes !== null) {
                this.designNotes = designNotes.value
            }

            if (designImages !== null) {
                this.designImages = designImages.value
            }

            if (designNumberGarments !== null) {
                this.designNumberGarments = designNumberGarments.value
            }

            if (designNumber !== null) {
                this.designNumber = designNumber.value
            }

            if (designTotalCost !== null) {
                this.designTotalCost = designTotalCost.value
            }
        }
        else {
            //Get all existing values from the database for this class
            this.designID = databaseValues.designID;
            this.orderID = databaseValues.orderID;
            this.designType = databaseValues.designType;
            this.designDescription = databaseValues.designDescription;
            this.designNotes = databaseValues.designNotes;
            this.designImages = databaseValues.designImages;
            this.designNumberGarments = databaseValues.designNumberGarments;
            this.designNumber = databaseValues.designNumber;
            this.designTotalCost = databaseValues.designTotalCost;

            //Update the form with the class values
            if (designID !== null) {
                designID.value = this.designID;
            }

            if (orderID !== null) {
                orderID.value = this.orderID;
            }

            if (designType !== null) {
                designType.value = this.designType;
            }

            if (designDescription !== null) {
                designDescription.value = this.designDescription;
            }

            if (designNotes !== null) {
                designNotes.value = this.designNotes;
            }

            if (designImages !== null) {
                designImages.value = this.designImages;
            }

            if (designNumberGarments !== null) {
                designNumberGarments.value = this.designNumberGarments;
            }

            if (designNumber !== null) {
                designNumber.value = this.designNumber;
            }

            if (designTotalCost !== null) {
                designTotalCost.value = this.designTotalCost;
            }
        }
    }
}

// Create Garment Class
export class Garment {
    designID = null;
    orderID = null;
    garmentID = null;
    garmentNumberGarments = 1;
    garmentNumber = 1;
    garmentGender = null;
    garmentSize = null;
    garmentStyleNumber = null;
    garmentAmount = null;
    garmentCostPerItem = null;
    garmentTotalCost = null;

    constructor(getFormValues, databaseValues = null) {
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

        if (getFormValues) {
            //Pull all existing values from the form for the database;
            if (designID !== null) {
                this.designID = designID.value;
            }

            if (orderID !== null) {
                this.orderID = orderID.value;
            }

            if (garmentID !== null) {
                this.garmentID = garmentID.value;
            }

            if (garmentNumberGarments !== null) {
                this.garmentNumberGarments = garmentNumberGarments.value;
            }

            if (garmentNumber !== null) {
                this.garmentNumber = garmentNumber.value;
            }

            if (garmentGender !== null) {
                this.garmentGender = garmentGender.value;
            }

            if (garmentSize !== null) {
                this.garmentSize = garmentSize.value;
            }

            if (garmentStyleNumber !== null) {
                this.garmentStyleNumber = garmentStyleNumber.value;
            }

            if (garmentAmount !== null) {
                this.garmentAmount = garmentAmount.value;
            }

            if (garmentCostPerItem !== null) {
                this.garmentCostPerItem = garmentCostPerItem.value;
            }

            if (garmentTotalCost !== null) {
                this.garmentTotalCost = garmentTotalCost.value;
            }
        }
        else {
            //Get all existing values from the database for this class
            this.designID = databaseValues.designID;
            this.orderID = databaseValues.orderID;
            this.garmentID = databaseValues.garmentID;
            this.garmentNumberGarments = databaseValues.garmentNumberGarments;
            this.garmentNumber = databaseValues.garmentNumber;
            this.garmentGender = databaseValues.garmentGender;
            this.garmentSize = databaseValues.garmentSize;
            this.garmentStyleNumber = databaseValues.garmentStyleNumber;
            this.garmentAmount = databaseValues.garmentAmount;
            this.garmentCostPerItem = databaseValues.garmentCostPerItem;
            this.garmentTotalCost = databaseValues.garmentTotalCost;

            //Update the form with the class values
            if (designID !== null) {
                designID.value = this.designID;
            }

            if (orderID !== null) {
                orderID.value = this.orderID;
            }

            if (garmentID !== null) {
                garmentID.value = this.garmentID;
            }

            if (garmentNumberGarments !== null) {
                garmentNumberGarments.value = this.garmentNumberGarments;
            }

            if (garmentNumber !== null) {
                garmentNumber.value = this.garmentNumber;
            }

            if (garmentGender !== null) {
                garmentGender.value = this.garmentGender;
            }

            if (garmentSize !== null) {
                garmentSize.value = this.garmentSize;
            }

            if (garmentStyleNumber !== null) {
                garmentStyleNumber.value = this.garmentStyleNumber;
            }

            if (garmentAmount !== null) {
                garmentAmount.value = this.garmentAmount;
            }

            if (garmentCostPerItem !== null) {
                garmentCostPerItem.value = this.garmentCostPerItem;
            }

            if (garmentTotalCost !== null) {
                garmentTotalCost.value = this.garmentTotalCost;
            }
        }
    }
}

// Create Embroidery Class
export class Embroidery {
    designID = null;
    embroideryID = null;
    embroideryJobDescription = null;
    embroideryAmount = null;
    embroideryThread = null;
    embroideryMaterial = null;
    embroideryCostPerItem = null;
    embroideryTotalCost = null;

    constructor(getFormValues, databaseValues = null) {
        let designID = document.getElementById("designID");
        let embroideryID = document.getElementById("embroideryID");
        let embroideryJobDescription = document.getElementById("embroideryJobDescription");
        let embroideryAmount = document.getElementById("embroideryAmount");
        let embroideryThread = document.getElementById("embroideryThread");
        let embroideryMaterial = document.getElementById("embroideryMaterial");
        let embroideryCostPerItem = document.getElementById("embroideryCostPerItem");
        let embroideryTotalCost = document.getElementById("embroideryTotalCost");

        if (getFormValues) {
            //Pull all existing values from the form for the database;
            if (designID !== null) {
                this.designID = designID.value
            }

            if (embroideryID !== null) {
                this.embroideryID = embroideryID.value
            }

            if (embroideryJobDescription !== null) {
                this.embroideryJobDescription = embroideryJobDescription.value
            }

            if (embroideryAmount !== null) {
                this.embroideryAmount = embroideryAmount.value
            }

            if (embroideryThread !== null) {
                this.embroideryThread = embroideryThread.value
            }

            if (embroideryMaterial !== null) {
                this.embroideryMaterial = embroideryMaterial.value
            }

            if (embroideryCostPerItem !== null) {
                this.embroideryCostPerItem = embroideryCostPerItem.value
            }

            if (embroideryTotalCost !== null) {
                this.embroideryTotalCost = embroideryTotalCost.value
            }
        }
        else {
            //Get all existing values from the database for this class
            this.designID = databaseValues.designID;
            this.embroideryID = databaseValues.embroideryID;
            this.embroideryJobDescription = databaseValues.embroideryJobDescription;
            this.embroideryAmount = databaseValues.embroideryAmount;
            this.embroideryThread = databaseValues.embroideryThread;
            this.embroideryMaterial = databaseValues.embroideryMaterial;
            this.embroideryCostPerItem = databaseValues.embroideryCostPerItem;
            this.embroideryTotalCost = databaseValues.embroideryTotalCost;

            //Update the form with the class values
            if (designID !== null) {
                designID.value = this.designID;
            }

            if (embroideryID !== null) {
                embroideryID.value = this.embroideryID;
            }

            if (embroideryJobDescription !== null) {
                embroideryJobDescription.value = this.embroideryJobDescription;
            }

            if (embroideryAmount !== null) {
                embroideryAmount.value = this.embroideryAmount;
            }

            if (embroideryThread !== null) {
                embroideryThread.value = this.embroideryThread;
            }

            if (embroideryMaterial !== null) {
                embroideryMaterial.value = this.embroideryMaterial;
            }

            if (embroideryCostPerItem !== null) {
                embroideryCostPerItem.value = this.embroideryCostPerItem;
            }

            if (embroideryTotalCost !== null) {
                embroideryTotalCost.value = this.embroideryTotalCost;
            }
        }
    }
}

// Create Vinylize Class
export class Vinylize {
    designID = null;
    vinylizeID = null;
    vinylizeJobDescription = null;
    vinylizeAmount = null;
    vinylizeCostPerItem = null;
    vinylizeTotalCost = null;

    constructor(getFormValues, databaseValues = null) {
        let designID = document.getElementById("designID ");
        let vinylizeID = document.getElementById("vinylizeID ");
        let vinylizeJobDescription = document.getElementById("vinylizeJobDescription ");
        let vinylizeAmount = document.getElementById("vinylizeAmount ");
        let vinylizeCostPerItem = document.getElementById("vinylizeCostPerItem ");
        let vinylizeTotalCost = document.getElementById("vinylizeTotalCost ");

        if (getFormValues) {
            //Pull all existing values from the form for the database;
            if (designID !== null) {
                this.designID = designID.value
            }

            if (vinylizeID !== null) {
                this.vinylizeID = vinylizeID.value
            }

            if (vinylizeJobDescription !== null) {
                this.vinylizeJobDescription = vinylizeJobDescription.value
            }

            if (vinylizeAmount !== null) {
                this.vinylizeAmount = vinylizeAmount.value
            }

            if (vinylizeCostPerItem !== null) {
                this.vinylizeCostPerItem = vinylizeCostPerItem.value
            }

            if (vinylizeTotalCost !== null) {
                this.vinylizeTotalCost = vinylizeTotalCost.value
            }
        }
        else {
            //Get all existing values from the database for this class
            this.designID = databaseValues.designID;
            this.vinylizeID = databaseValues.vinylizeID;
            this.vinylizeJobDescription = databaseValues.vinylizeJobDescription;
            this.vinylizeAmount = databaseValues.vinylizeAmount;
            this.vinylizeCostPerItem = databaseValues.vinylizeCostPerItem;
            this.vinylizeTotalCost = databaseValues.vinylizeTotalCost;

            //Update the form with the class values
            if (designID !== null) {
                designID.value = this.designID;
            }

            if (vinylizeID !== null) {
                vinylizeID.value = this.vinylizeID;
            }

            if (vinylizeJobDescription !== null) {
                vinylizeJobDescription.value = this.vinylizeJobDescription;
            }

            if (vinylizeAmount !== null) {
                vinylizeAmount.value = this.vinylizeAmount;
            }

            if (vinylizeCostPerItem !== null) {
                vinylizeCostPerItem.value = this.vinylizeCostPerItem;
            }

            if (vinylizeTotalCost !== null) {
                vinylizeTotalCost.value = this.vinylizeTotalCost;
            }
        }
    }
}

// Create Other Class
export class Other {
    designID = null;
    orderID = null;
    otherID = null;
    otherJobDescription = null;
    otherAmount = null;
    otherCostPerItem = null;
    otherTotalCost = null;

    constructor(getFormValues, databaseValues = null) {
        let designID = document.getElementById("designID");
        let orderID = document.getElementById("orderID");
        let otherID = document.getElementById("otherID");
        let otherJobDescription = document.getElementById("otherJobDescription");
        let otherAmount = document.getElementById("otherAmount");
        let otherCostPerItem = document.getElementById("otherCostPerItem");
        let otherTotalCost = document.getElementById("otherTotalCost");

        if (getFormValues) {
            //Pull all existing values from the form for the database;
            if (designID !== null) {
                this.designID = designID.value
            }

            if (orderID !== null) {
                this.orderID = orderID.value
            }

            if (otherID !== null) {
                this.otherID = otherID.value
            }

            if (otherJobDescription !== null) {
                this.otherJobDescription = otherJobDescription.value
            }

            if (otherAmount !== null) {
                this.otherAmount = otherAmount.value
            }

            if (otherCostPerItem !== null) {
                this.otherCostPerItem = otherCostPerItem.value
            }

            if (otherTotalCost !== null) {
                this.otherTotalCost = otherTotalCost.value
            }
        }
        else {
            //Get all existing values from the database for this class
            this.designID = databaseValues.designID;
            this.orderID = databaseValues.orderID;
            this.otherID = databaseValues.otherID;
            this.otherJobDescription = databaseValues.otherJobDescription;
            this.otherAmount = databaseValues.otherAmount;
            this.otherCostPerItem = databaseValues.otherCostPerItem;
            this.otherTotalCost = databaseValues.otherTotalCost;

            //Update the form with the class values
            if (designID !== null) {
                designID.value = this.designID;
            }

            if (orderID !== null) {
                orderID.value = this.orderID;
            }

            if (otherID !== null) {
                otherID.value = this.otherID;
            }

            if (otherJobDescription !== null) {
                otherJobDescription.value = this.otherJobDescription;
            }

            if (otherAmount !== null) {
                otherAmount.value = this.otherAmount;
            }

            if (otherCostPerItem !== null) {
                otherCostPerItem.value = this.otherCostPerItem;
            }

            if (otherTotalCost !== null) {
                otherTotalCost.value = this.otherTotalCost;
            }
        }
    }
}
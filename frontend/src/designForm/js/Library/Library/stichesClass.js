//Create all classes for Creative Stitches


export class Order {
    orderID = null;
    customerID = null;
    orderDescription = null;
    orderDate = null;
    requestedDeliveryDate = null;
    scheduledDeliveryDate = null;
    taxExemption = null;
    totalItems = null;
    totalMaterialCost = null;
    totalTaxes = null;
    totalProfit = null;
    totalSale = null;

    constructor(getFormValues, databaseValues) {
        let orderID = document.getElementById("orderID");
        let customerID = document.getElementById("customerID");
        let orderDescription = document.getElementById("orderDescription");
        let orderDate = document.getElementById("orderDate");
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

export class Customer {
    customerID = null;
    firstName = null;
    lastName = null;
    organization = null;
    phone = null;
    email = null;

    constructor(getFormValues, databaseValues) {
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

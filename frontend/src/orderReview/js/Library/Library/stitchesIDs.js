export function createID() {
    var customerID = document.getElementById("firstName").value.toString() + document.getElementById("lastName").value.toString() + "_" + document.getElementById("email").value.toString();
    var orderID = customerID + "_" + new Date().toLocaleDateString();

    //Update stored orderID
    storeOrderID(orderID);

    return [customerID, orderID];
}

export function storeOrderID(orderID) {
    sessionStorage.orderID = orderID
}
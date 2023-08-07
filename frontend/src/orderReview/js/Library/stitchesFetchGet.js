// Handle Orders

export async function readOrder() {
    let response = await fetch('/readOrder', {
        methods: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })

    //Parse response to update values
    let jsonResponse = await response.json();
    return jsonResponse;
}

export async function saveOrder(currentOrder) {
    let response = await fetch('/orderSubmit', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(currentOrder)
    })

    //Parse response to update values
    let jsonResponse = await response.json();
    return jsonResponse;
}

// Handle Customers

export async function saveCustomer(currentCustomer) {
    let response = await fetch('/customerSubmit', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(currentCustomer)
    })

    //Parse response to update values
    let jsonResponse = await response.json();
    return jsonResponse;
}

// Handle Designs

export async function saveDesign(design) {
    let response = await fetch('/designSubmit', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(design)
    })

    //Parse response to update values
    let jsonResponse = await response.json();
    return jsonResponse;
}

export async function fetchDesign(design) {
    let response = await fetch('/designRetrieve', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(design)
    })

    //Parse response to update values
    let jsonResponse = await response.json();
    return jsonResponse;
}

// Handle Garments

export async function saveGarment(garment) {
    let response = await fetch('/garmentSubmit', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(garment)
    })

    //Parse response to update values
    let jsonResponse = await response.json();
    return jsonResponse;
}

export async function removeGarment(garment) {
    let response = await fetch('/garmentRemove', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(garment)
    })

    //Parse response to update values
    let jsonResponse = await response.json();
    return jsonResponse;
}

export async function fetchGarment(garment) {
    let response = await fetch('/garmentRetrieve', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(garment)
    })

    //Parse response to update values
    let jsonResponse = await response.json();
    return jsonResponse;
}

export async function fetchAllGarment(garment) {
    let data = await fetch('/garmentAllRetrieve', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(garment)
    })

    //Parse response to update values
    let dataJson = await data.json();
    return dataJson;
}
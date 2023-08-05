import * as stichesClass from './stichesClass.js'

export async function readOrder() {
    await fetch('/readOrder', {
        methods: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
        .then(response => response.json())
        .then(response => console.log(response))
        .finally(() => {
            console.log("/readOrder Done");
            return stichesClass.response
        })
}

export async function saveOrder(currentOrder) {
    await fetch('/orderSubmit', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(currentOrder)
    }).then(response => { return response })

}

export async function saveCustomer(currentCustomer) {
    await fetch('/customerSubmit', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(currentCustomer)
    }).then(response => { return response })
}
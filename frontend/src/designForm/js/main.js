function initialHide(){
    document.getElementById('hideDiv').style.display = "none";
}

function hideDiv(elem) {
    if(elem.value == "Garment")
    document.getElementById('hideDiv').style.display = "none";
    else
    document.getElementById('hideDiv').style.display = 'block';
}
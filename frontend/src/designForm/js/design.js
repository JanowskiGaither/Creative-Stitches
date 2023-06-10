import '../scss/designStyles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'



let message = "hello from design.js!";
let resetbutton = document.getElementById("resetButton");
let selectItemType = document.getElementById("selectItemType");


function initialHide(){
    let hiddenItemType = document.getElementById("hideDiv");
    hiddenItemType.style.display= "none";
}

function hideDiv() {
    var typeSelected = selectItemType.options[selectItemType.selectedIndex].text;

    if(typeSelected == "Garment")
    document.getElementById('hideDiv').style.display = "none";
    else
    document.getElementById('hideDiv').style.display = 'block';
}


function sayHello(message){
    console.log(message);
}


document.addEventListener("DOMContentLoaded", function(){
    initialHide();
});

selectItemType.addEventListener("change", function(){
    hideDiv();
});

resetbutton.addEventListener('click', function(){
    sayHello(message);
});
let header = document.getElementById("header")
let rbtn1 = document.getElementById("rbtnR1")
let rbtn2 = document.getElementById("rbtnR2")
let rbtn3 = document.getElementById("rbtnR3")

let inpR1 = parseFloat(document.getElementById("inpR1").value)
let inpR2 = parseFloat(document.getElementById("inpR2").value)
let inpR3 = parseFloat(document.getElementById("inpR3").value)

let output = document.getElementById("output")

function init(){
    rbtn1.checked = true
}

function calc(){
    let rges = 0;
    if(rbtn1.checked){
        rges = parseFloat(parseFloat(document.getElementById("inpR1").value) + parseFloat(document.getElementById("inpR2").value) + parseFloat(document.getElementById("inpR3").value));
    } else if(rbtn2.checked){
        rges = parseFloat(1/(1/parseFloat(document.getElementById("inpR1").value) + 1/parseFloat(document.getElementById("inpR2").value) + 1/parseFloat(document.getElementById("inpR3").value)));
    }else{
        rges = parseFloat(parseFloat(document.getElementById("inpR1").value) + 1/(1/parseFloat(document.getElementById("inpR2").value) + 1/parseFloat(document.getElementById("inpR3").value)));
    }
    output.innerHTML = "Rges = "+ rges + "&Omega;"
}

function label(x){
    header.innerHTML = x
    delte()
}

function delte(){
    output.innerHTML = ""
}
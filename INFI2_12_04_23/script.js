let rbtn1 = document.getElementById("rbtn1")
let rbtn2 = document.getElementById("rbtn2")
let rbtn3 = document.getElementById("rbtn3")

let inpLabel1 = document.getElementById("inpLabel1")
let inpLabel2 = document.getElementById("inpLabel2")

let inp1 = document.getElementById("inp1")
let inp2 = document.getElementById("inp2")

let btnCalc = document.getElementById("btnCalc")
let output = document.getElementById("output")

var a, b, c, u, q, p, hc, A, alpha, betha, gamma

function calculate(){
    if(rbtn1.checked){
        a = inp1.value 
        b = inp2.value
        c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
        u = parseFloat(a) + parseFloat(b) + parseFloat(c)
        q = Math.pow(a, 2) / c
        p = c - q
        h = Math.sqrt(p*q)
        A = (c * h) / 2
        alpha = Math.atan2(h, p)
        alpha *= 180/Math.PI
        betha = 90 - alpha
        gamma = 180 - alpha - betha
        output.innerHTML = `a = ${a} <br/> b = ${b} <br/> c = ${c} <br/>
        u = ${u} <br/> q = ${q} <br/> p = ${p} <br/> h = ${h} <br/> A = ${A}
        <br/> α = ${alpha} <br/> β = ${betha}`
    } else if(rbtn2.checked){
        a = inp1.value
        c = inp2.value
        b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2))
        u = parseFloat(a) + parseFloat(b) + parseFloat(c)
        q = Math.pow(a, 2) / c
        p = c - q
        h = Math.sqrt(p*q)
        A = (c * h) / 2
        alpha = Math.atan2(h, p)
        alpha *= 180/Math.PI
        betha = 90 - alpha
        gamma = 180 - alpha - betha
        output.innerHTML = `a = ${a} <br/> b = ${b} <br/> c = ${c} <br/>
        u = ${u} <br/> q = ${q} <br/> p = ${p} <br/> h = ${h} <br/> A = ${A}
        <br/> α = ${alpha} <br/> β = ${betha}`
    }else{
        b = inp1.value
        c = inp2.value
        a = Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2))
        u = parseFloat(a) + parseFloat(b) + parseFloat(c)
        q = Math.pow(a, 2) / c
        p = c - q
        h = Math.sqrt(p*q)
        A = (c * h) / 2
        alpha = Math.atan2(h, p)
        alpha *= 180/Math.PI
        betha = 90 - alpha
        gamma = 180 - alpha - betha
        output.innerHTML = `a = ${a} <br/> b = ${b} <br/> c = ${c} <br/>
        u = ${u} <br/> q = ${q} <br/> p = ${p} <br/> h = ${h} <br/> A = ${A}
        <br/> α = ${alpha} <br/> β = ${betha}`
    }
}

function label(){
    if(rbtn1.checked){
        inpLabel1.innerHTML = "a = "
        inpLabel2.innerHTML = "b = "
    } else if(rbtn2.checked){
        inpLabel1.innerHTML = "a = "
        inpLabel2.innerHTML = "c = "
    }else{
        inpLabel1.innerHTML = "b = "
        inpLabel2.innerHTML = "c = "
    }
    delte()
}

function init(){
    rbtn1.checked = true
}

function delte(){
    output.innerHTML = ""
    inp1.innerHTML = ""
    inp2.innerHTML = ""
}

function calc(){
    if(parseFloat(a) >= parseFloat(c) || parseFloat(b) >= parseFloat(c)){
        window.alert("c muss > sein als a/b")
    }else{
        calculate()
    }
}
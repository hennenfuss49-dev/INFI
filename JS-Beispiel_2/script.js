let rOne = document.getElementById("inpR_1")
let rTwo = document.getElementById("inpR_2")
let rThree = document.getElementById("inpR_3")

let btnSeries = document.getElementById("btnSeries")
let btnPara = document.getElementById("btnPara")
let btnMix = document.getElementById("btnMix")

let pOutput = document.getElementById("output")

btnSeries.addEventListener('click', (e) => {
    calcSeries()
})

btnPara.addEventListener('click', (e) => {
    calcPara()
})

btnMix.addEventListener('click', (e) => {
    calcMix()
})

function calcSeries(){
    let result = parseFloat(rOne.value) + parseFloat(rTwo.value) + parseFloat(rThree.value)
    pOutput.innerHTML = `R₁ + R₂ + R₃ = ${result}Ω`
}

function calcPara(){
    let result = 1/(1/parseFloat(rOne.value) + 1/parseFloat(rTwo.value) + 1/parseFloat(rThree.value))
    pOutput.innerHTML = `1/(1/R₁ + 1/R₂ + 1/R₃) = ${result}Ω`
}

function calcMix(){
    let result = parseFloat(rOne.value) + 1/(1/parseFloat(rTwo.value) + 1/parseFloat(rThree.value))
    pOutput.innerHTML = `R₁ + 1/(1/R₂ + 1/R₃) = ${result}Ω`
}

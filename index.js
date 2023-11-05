

const convertBtn = document.getElementById("convert-btn"); 

let inputValue = 1; 

const meterToFeet = 3.281; // 1 meter = 3.281 feet
const literToGallon = 0.264; // 1 liter = 0.264 gallon
const kgToPound = 2.204; // 1 kilogram = 2.204 pound

let outputLengthField = document.getElementById("output-length");
let outputVolumeField = document.getElementById("output-volume");
let outputMassField = document.getElementById("output-mass");

let outputLengthMeter;
let outputLengthFeet;
let outputVolumeLiter; 
let outputVolumeGallon; 
let outputMassKilogram; 
let outputMassPound; 

calculate(inputValue);
renderOutput();

convertBtn.addEventListener("click", function(){
    inputValue = parseInt(document.getElementById("number-input").value);
    calculate(inputValue);
    renderOutput(); 
});

function calculate(value){
    outputLengthMeter = (value / meterToFeet).toFixed(3); 
    outputLengthFeet = (value * meterToFeet).toFixed(3);
    outputVolumeLiter = (value / literToGallon).toFixed(3);
    outputVolumeGallon = (value * literToGallon).toFixed(3);
    outputMassKilogram = (value / kgToPound).toFixed(3);
    outputMassPound = (value * kgToPound).toFixed(3);
};

function renderOutput(){
    outputLengthField.textContent = `${inputValue} meters = ${outputLengthFeet} feet | ${inputValue} feet = ${outputLengthMeter} meters`
    outputVolumeField.textContent = `${inputValue} liters = ${outputVolumeGallon} gallons | ${inputValue} gallons = ${outputVolumeLiter} liters` 
    outputMassField.textContent = `${inputValue} kilos = ${outputMassPound} pounds | ${inputValue} pounds = ${outputMassKilogram} kilos` 
};


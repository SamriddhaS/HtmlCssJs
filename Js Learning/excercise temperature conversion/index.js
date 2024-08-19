
const textBox = document.getElementById("inputField")
const radioBtnCToF = document.getElementById("toFahr")
const radioBtnFToC = document.getElementById("toCelcius")
const resultText = document.getElementById("result")

textBox.addEventListener("input", function() {
    startConversionAndUpdateTextState()
});


radioBtnCToF.addEventListener('change', function() {
    if (this.checked) {
        startConversionAndUpdateTextState()
    }
});

radioBtnFToC.addEventListener('change', function() {
    if (this.checked) {
        startConversionAndUpdateTextState()
    }
});

function startConversionAndUpdateTextState(){
    let value = textBox.value
    let result = convertTemperature(value)
    resultText.textContent = result
}

function convertTemperature(temperature){
    if(radioBtnCToF.checked){
        return `${celciusToFer(temperature)} °F`
    }else if(radioBtnFToC.checked){
        return `${fahrenheitToCelsius(temperature)} °C`
    }else{
        return "Please select A conversion type"
    }
}

function celciusToFer(value){
   return ((value * 9/5) + 32).toFixed(2);
}

function fahrenheitToCelsius(value) {
    return ((value - 32) * 5/9).toFixed(2);
}

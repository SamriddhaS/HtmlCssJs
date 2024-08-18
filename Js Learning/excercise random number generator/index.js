

const btn = document.getElementById("generateRandomBtn")
const text = document.getElementById("showValue")

btn.onclick = function(){
    let number = generateRandom(1,10)
    text.textContent = number
}

function generateRandom(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}
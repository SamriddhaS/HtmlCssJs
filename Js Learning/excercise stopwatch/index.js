
// using input field
let curremtValue = 0
let intervalId; // Store the interval ID

document.getElementById("startBtn").onclick = function(){
    startCount();
}

document.getElementById("stopBtn").onclick = function(){
    stopCount();
}

document.getElementById("resetBtn").onclick = function(){
    resetCount();
}

function startCount(){
    if (!intervalId) { // Prevent multiple intervals from being set
        
        // To start the timer immidiately
        curremtValue++
        shpwOutput();

        // And then use this setInterval to 
        // increase the count by 1 each 1 second...
        intervalId = setInterval(function() {
            curremtValue++;
            shpwOutput();
        }, 1000); // Increase by 1 every second
    }
}

function stopCount(){
    clearInterval(intervalId);
    intervalId = null; // Reset the interval ID
}

function resetCount(){
    stopCount(); // Stop counting when resetting
    curremtValue = 0;
    shpwOutput();
}

function shpwOutput(){
    document.getElementById("showValue").textContent = curremtValue
}

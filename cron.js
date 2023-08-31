"use strict";

let hours = 0;
let minutes = 0;
let seconds = 0;

const interval = 1000;  
let timerInterval;
let isRunning = false; 
 
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(updateTimer, interval);
    }
} 
function pauseTimer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timerInterval);
    }
}
 
function stopTimer() {
    isRunning = false;
    clearInterval(timerInterval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay('00:00:00');
}
 
function updateTimer() {
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    const formattedTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    updateDisplay(formattedTime);
}
 
function formatTime(value) {
    return value < 10 ? `0${value}` : value;
}
 
function updateDisplay(value) {
    document.getElementById('counter').innerText = value;
}

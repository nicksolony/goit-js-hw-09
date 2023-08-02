import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

let datePicker = document.querySelector('#datetime-picker');

let startBtn = document.querySelector('[data-start]');

// timer inputs
let daysTimer = document.querySelector('[data-days]');
let hoursTimer = document.querySelector('[data-hours]');
let minutesTimer = document.querySelector('[data-minutes]');
let secondsTimer = document.querySelector('[data-seconds]');

let msTimer = 0;
let selectedTime = 0;
let timerInterval = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    selectedTime = selectedDates[0];
    selectTimerDate(selectedTime);
    },
  };


flatpickr(datePicker, options);

startBtn.addEventListener('click', ()=>{
    msTimer = selectedTime - new Date();
    setTimer(convertMs(msTimer));
    startBtn.disabled=true;
    datePicker.disabled = true;
    runTimer()
});

function selectTimerDate (selectDate) {
    if (selectDate < new Date()) {
        startBtn.disabled=true;
        alert('Please choose a date in the future');
    } else {
        startBtn.disabled = false;
    }
};

function setTimer({days,hours,minutes,seconds}) {
    daysTimer.innerHTML=addLeadingZero(days);
    hoursTimer.innerHTML=addLeadingZero(hours);
    minutesTimer.innerHTML=addLeadingZero(minutes);
    secondsTimer.innerHTML=addLeadingZero(seconds);
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  };

function addLeadingZero(value) {
    if(value<10) {
        return value.toString().padStart(2,'0');
    } else {
        return value;
    };
};

function runTimer() {
    timerInterval = setInterval(updateTimer,1000);
};

function updateTimer() {
    msTimer-=1000;
    setTimer(convertMs(msTimer));
    if (msTimer<1000) {
        clearInterval(timerInterval);
        datePicker.disabled = false;
    };
};
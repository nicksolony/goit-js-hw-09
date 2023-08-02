import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      selectTimerDate(selectedDates[0]);
      console.log(convertMs(selectedDates[0]-new Date()));
    },
  };

let datePicker = document.querySelector('#datetime-picker');

let startBtn = document.querySelector('[data-start]');
let daysTimer = document.querySelector('[data-days]');
let hoursTimer = document.querySelector('[data-hours]');
let minutesTimer = document.querySelector('[data-minutes]');
let secondsTimer = document.querySelector('[data-seconds]');

// datePicker.addEventListener('input', (e) => {
//     console.log(e.target.value);
// })

flatpickr(datePicker, options);

function selectTimerDate (selectDate) {
    if (selectDate < new Date()) {
        startBtn.disabled=true;
        alert('Please choose a date in the future');
    } else {
        startBtn.disabled = false;
        datePicker.disabled = true;
        let timeBefore = convertMs(selectDate-new Date());
        setTimer(timeBefore);
    }
};

function setTimer({days,hours,minutes,seconds}) {
    daysTimer.innerHTML=days;
    hoursTimer.innerHTML=hours;
    minutesTimer.innerHTML=minutes;
    secondsTimer.innerHTML=seconds;
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
  }
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      checkFutureDate(selectedDates[0]);
    },
  };

let datePicker = document.querySelector('#datetime-picker');

let startBtn = document.querySelector('[data-start]');

// datePicker.addEventListener('input', (e) => {
//     console.log(e.target.value);
// })

flatpickr(datePicker, options);

function checkFutureDate (selectDate) {
    if (selectDate < new Date()) {
        startBtn.disabled=true;
        alert('Please choose a date in the future');
    } else {
        startBtn.disabled = false;
    }
};

let startBtn = document.querySelector('[data-start]');
let stopBtn = document.querySelector('[data-stop]');
let body = document.querySelector('body');
let colorChangeOn = false;

let bgColor = () =>{
    body.style.backgroundColor=getRandomHexColor();
    console.log('color change');
};


startBtn.addEventListener('click', (e) => {
    e.target.disabled = true;
    console.log(e.target);
    bgColor;
});

stopBtn.addEventListener('click', () =>{
    console.log('stop');
    startBtn.disabled = false;
});


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  };




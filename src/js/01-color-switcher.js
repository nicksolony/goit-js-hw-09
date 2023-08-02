
let startBtn = document.querySelector('[data-start]');
let stopBtn = document.querySelector('[data-stop]');
let body = document.querySelector('body');
let bgColorChange = null;


startBtn.addEventListener('click', () =>{
    bgColor();
    bgColorChange = setInterval(bgColor,1000);
    startBtn.disabled=true;
});

stopBtn.addEventListener('click', () =>{
    clearInterval(bgColorChange);
    startBtn.disabled = false;
});


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  };

function bgColor() {
    body.style.backgroundColor=getRandomHexColor();
};




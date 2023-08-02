let delayInput = document.querySelector('input[name=delay]');
let stepInput = document.querySelector('input[name=step]');
let amountInput = document.querySelector('input[name=amount]');
let formEl = document.querySelector('form'); 


formEl.addEventListener('submit', (e) => {

  e.preventDefault();
  const form = Array.from(e.target);
  const formObj = {};
  form.filter((el)=>el.type==='number').forEach ((input) => {
    formObj[`${input.name}`]= input.value;
  })
  
  console.log(formObj);

})






function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
};



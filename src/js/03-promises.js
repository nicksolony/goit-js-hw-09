import Notiflix from 'notiflix';

let delayInput = document.querySelector('input[name=delay]');
let stepInput = document.querySelector('input[name=step]');
let amountInput = document.querySelector('input[name=amount]');
let formEl = document.querySelector('form'); 
let formObj = {};

formEl.addEventListener('submit', (e) => {

  e.preventDefault();
  
  runPromises(createFormObject(e.target));

});


function createFormObject(formData) {
  const formArray = Array.from(formData);
  formArray.filter((el)=>el.type==='number').forEach ((input) => {
    formObj[`${input.name}`]= input.value;
  });
  return formObj;
};

function runPromises(form) {
  for (let i = 0; i < form.amount; i+=1) {
    const stepDelay = parseInt(form.delay) + parseInt(i*form.step);
    createPromise(i+1, stepDelay).
    then (value => {
      Notiflix.Notify.success(value);
    }).
    catch (value=>{
      Notiflix.Notify.failure(value);
    });  
  };
};


function createPromise(position, delay) {
   return new Promise ((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      setTimeout(() => {
        if (shouldResolve) {
          resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
        } else {
         reject(`❌ Rejected promise ${position} in ${delay}ms`);    
        }
      }, delay);
    });
};


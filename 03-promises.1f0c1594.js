document.querySelector("input[name=delay]"),document.querySelector("input[name=step]"),document.querySelector("input[name=amount]");let e=document.querySelector("form"),t={};e.addEventListener("submit",(e=>{var o;e.preventDefault(),function(e){for(let t=0;t<e.amount;t+=1){const o=parseInt(e.delay)+parseInt(t*e.step);n(t+1,o).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))}}((o=e.target,Array.from(o).filter((e=>"number"===e.type)).forEach((e=>{t[`${e.name}`]=e.value})),t))}));const n=(e,t)=>new Promise(((n,o)=>{Math.random()>.3?n(`✅ Fulfilled promise ${e} in ${t}ms`):o(`❌ Rejected promise ${e} in ${t}ms`)}));
//# sourceMappingURL=03-promises.1f0c1594.js.map

document.querySelector("input[name=delay]"),document.querySelector("input[name=step]"),document.querySelector("input[name=amount]");document.querySelector("form").addEventListener("submit",(e=>{e.preventDefault();const t=Array.from(e.target),n={};t.filter((e=>"number"===e.type)).forEach((e=>{n[`${e.name}`]=e.value})),console.log(n)}));
//# sourceMappingURL=03-promises.f233a5a3.js.map

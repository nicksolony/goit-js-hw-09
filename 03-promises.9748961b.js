!function(){document.querySelector("input[name=delay]"),document.querySelector("input[name=step]"),document.querySelector("input[name=amount]");document.querySelector("form").addEventListener("submit",(function(e){e.preventDefault();var t=Array.from(e.target),n={};t.filter((function(e){return"number"===e.type})).forEach((function(e){n["".concat(e.name)]=e.value})),console.log(n)}))}();
//# sourceMappingURL=03-promises.9748961b.js.map
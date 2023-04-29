
var grade1 = document.querySelector("#grade1");
var grade2 = document.querySelector("#grade2");
var grade3 = document.querySelector("#grade3");
var grade4 = document.querySelector("#grade4");
var grade5 = document.querySelector("#grade5");

var grade = 5;

var frase = document.querySelector("#results-text");

tempHTML = frase.innerHTML;
newHTML = 'You selected ' + grade + ' out of 5';
frase.innerHTML = newHTML;

console.log();


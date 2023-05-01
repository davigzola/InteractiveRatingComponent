var selectedGrade = sessionStorage.getItem("selectedGrade");
var phrase = document.querySelector("#results-text");

tempHTML = phrase.innerHTML;
newHTML = 'You selected ' + selectedGrade + ' out of 5';
phrase.innerHTML = newHTML;
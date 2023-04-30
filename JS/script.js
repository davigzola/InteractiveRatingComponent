var grades = document.querySelector(".grades");
var frase = document.querySelector("#results-text");

function choosenGrade() {
    var selectedGrade = document.querySelector("input[type = radio]:checked").value;
    return selectedGrade;
}
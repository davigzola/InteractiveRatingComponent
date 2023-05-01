var grades = document.querySelector(".grades");

grades.onchange = ()=> {
    var selectedGrade = document.querySelector("input[type = radio]:checked").value;
    sessionStorage.setItem("selectedGrade",  selectedGrade);
}
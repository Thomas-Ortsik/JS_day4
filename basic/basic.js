let firstNameVal = "";
let lastNameVal = "";
let ageVal = "";

let i_lname = document.getElementById("i_lname");
let i_fname = document.getElementById("i_fname");
let i_age = document.getElementById("i_age");
let form = document.getElementById("_form");
let outputDiv = document.getElementById("outputField");
let i_profession = document.getElementById("i_profession");


form.addEventListener("input", updateDisplay);


function updateDisplay(){
    firstNameVal = i_fname.value;
    lastNameVal = i_lname.value;
    ageVal = i_age.value;

    let fnameOut = `<span style=\"color: ${colorSelect(firstNameVal)};\">${firstNameVal}</span>`;
    let lnameOut = `<span style= \"color: ${colorSelect(lastNameVal)};\">${lastNameVal}</span>`;
    outputDiv.innerHTML = `<div style=\"font-weight: bold;\">Entered Data</div><div>First name: ${fnameOut}, Last name: ${lnameOut}, Age: ${ageVal}</div>`;
    if (outputDiv.style.backgroundColor != i_profession.value){
        outputDiv.style.backgroundColor = i_profession.value;
    }
}

function colorSelect(text){
    if (text.length > 5){
        return "green";
    }
    return "red";
}

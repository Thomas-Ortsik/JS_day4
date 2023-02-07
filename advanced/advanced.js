let circle = document.getElementsByClassName("circle")[0];
let outputText = document.getElementById("outputText");
let body = document.body.style;

circle.addEventListener("mouseover", () => outputText.innerHTML = "you are in the circle");
circle.addEventListener("mouseout", () => outputText.innerHTML = "you are outside the circle");
circle.addEventListener("click", () => body.backgroundColor = "gray");
circle.addEventListener("dblclick", () => body.backgroundColor = "blue");


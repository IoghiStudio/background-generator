var _ = require('lodash');

let array = [1,2,3,4,5,6,7,8];
console.log("answer: " ,_.without(array,6));

let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.getElementsByClassName("color2")[0];
let body = document.getElementById("body");


function setGradient() {
  body.style.background = "linear-gradient(to right , " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";

}

color1.addEventListener("input" , setGradient);

color2.addEventListener("input" , setGradient);
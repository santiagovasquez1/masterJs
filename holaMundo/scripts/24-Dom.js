'use strict'

//Manipulación del dom desde js

function cambiaColor(color) {
    caja.style.background = color;
}

function changeHeight(height) {
    caja.style.height = height;
}

var caja = document.getElementById("caja");
caja.innerHTML = "Texto modificado desde el js";
caja.style.padding = "20px";
caja.style.color = "red";
caja.className = "ejemplo";
console.log(caja);

//otra forma de seleccionar elementos, como si fuera en css
var caja2 = document.querySelector("#caja");

var pos = caja2.getBoundingClientRect();
console.log(pos);

var diaActual = new Date();

console.log("*****************");
console.log(diaActual.getMonth());
console.log(diaActual.getDay());
console.log(diaActual.getDate());
console.log("*****************");

var table = document.querySelector("#tableConsultingElectronicDaily");
var rowsTable = document.querySelector("#tableConsultingBody").querySelectorAll("tr");

var divsRojos = document.querySelectorAll(".rojo");
var divsAmarillos = document.querySelectorAll(".amarillo");

backGroundToDiv(divsRojos, "red");
backGroundToDiv(divsAmarillos, "yellow");

function backGroundToDiv(divsArray, color) {
    divsArray.forEach(div => {
        div.style.background = color;
    });
}
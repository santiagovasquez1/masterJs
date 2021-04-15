'use strict'
//Pruebas con let y var

//Prueba con var
var numero = 40;

if (true) {
    var numero = 50;
    console.log(numero);
}

console.log(numero);

//Prueba con let
var texto = "Curso js basico";
console.log(texto);

//Let solo actua en el bloque de programación
if (true) {
    let texto = "texto desde if";
    console.log(texto);
}

console.log(texto);
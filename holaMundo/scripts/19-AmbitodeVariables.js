'use strict'

/*
 La variables que van definidas dentro de una funcion, solo pueden ser llamadas
 dentro de la función, las variables que estan fuera de las funciones, se denominan 
 variables globales
*/

var numero = 12;
var texto = "Hola mundo soy una variable global"
holaMundo(texto);

function holaMundo(texto) {

    var hola_mundo = "Texto dentro de funcion";
    console.log(texto);
    console.log(numero);
    console.log(hola_mundo);
}
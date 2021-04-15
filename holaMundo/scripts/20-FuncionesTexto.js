'use strict'

/*
Funciones para trabajar con texto dentro de js
*/


var numero = 4444;
var text1 = "Bienvenidos al curso de js, curso especial";
var text2 = "Es muy buen curso";

//Metodos de transformacion de texto
console.log(numero.toString());
console.log(text1.toUpperCase());

//Calculode longitud de texto

var nombre = "Santiago Vasquez Gomez";
console.log(nombre.length);

//Concatenación

var textTotal = text1 + text2;
var textTotal2 = text1.concat(" " + text2);

console.log(textTotal, textTotal2);

/*
Busquedas de una palabra dentro de un string
el metodo indexOf o search, encuentra la primera coincidencia, 
el metodo lastIndexOf encuentra la ultima coincidencia
el metodo match, devuelve una coleccion de los resultados que encuentra
el metodo substr, extrae los caracteres de un string
el metodo startWith, busca que un string empiece con la cadena deseada
el metodo includes, busca que en string se encuentre una palabra
el metodo slice, corta el string, desde el numero de caracteres
el metodo split, corta las palabras y las mete en un array
el metodo trim, limpia el string, eliminando los espacios al principio y al final
*/

var busqueda = text1.indexOf("curso");
var replace = text2.replace("Gomez", "Perez");

console.log(busqueda)
console.log(text1.match(/curso/g));
console.log(text1.substr(15, 5));
console.log(text2.includes("curso"));
console.log(nombre);
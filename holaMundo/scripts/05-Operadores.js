'use strict'

//Operadores
var numero1 = 7;
var numero2 = 49;
var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multi = numero1 * numero2;
var div = numero1 / numero2;
var mod = numero1 % numero2;

var numerofake = "33";

//Conversion de string a number
Number(numerofake);
parseInt(numerofake);
parseFloat(numerofake);

//Devuelve el tipo de dato

var tipoDato = typeof(numerofake);

console.log(suma, resta, multi, div, mod)
console.log(tipoDato);
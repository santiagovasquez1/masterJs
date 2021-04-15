'use strict'

/*
programa que pida dos numeros y los compare
*/

var numero1 = prompt("Ingresa el numero 1", 0);
var numero2 = prompt("Ingresa el numero 2", 0);

while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = prompt("Ingresa el numero 1", 0);
    numero2 = prompt("Ingresa el numero 2", 0);
}

if (Number(numero1) < Number(numero2)) {
    alert("el numero " + numero1 + " es menor que " + numero2);
} else if (Number(numero1) > Number(numero2)) {
    alert("el numero " + numero1 + " es mayor que " + numero2);
} else {
    alert("Ambos numeros son iguales");
}
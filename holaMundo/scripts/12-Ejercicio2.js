'use strict'

/*
    Mostrar la media y la suma de los resultados hasta que el usuario introduzca un numero negativo
*/

var numero = prompt("Introduzca un numero", 0);
var suma = 0;
var prom = 0;
var cont = 0;

while (!isNaN(numero)) {
    if (Number(numero) >= 0) {
        suma += Number(numero);
        cont++;
        numero = prompt("Introduzca un numero", 0);
    } else {
        break;
    }
}

prom = suma / cont;
alert("la suma de los numeros ingresados es " + suma + " y el promedio es " + prom);
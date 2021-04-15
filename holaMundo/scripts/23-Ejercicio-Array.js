'use strict'

/*
    1.Pida al usuario 6 numeros por pantalla y los meta en un array
    2.Mostrar todos los elementos del array, en el pagina y consola.
    3.Ordenar el array y mostrarlos
    4.Inventir el orden y mostrarlo
    5.Mostrar cuantos elementos tiene el array
    6.Busqueda de un valor introducido por el usuario
     decir si existe y su pos
*/

var numbers = introduceNumbersByUser();

mostrarArray(numbers, "Los numeros intrucidos por el usuario son: ");
console.log("*****************");
mostrarArray(numbers.sort((a, b) => {
    var result = a < b ? -1 : a > b ? 1 : 0;
    return result;
}), "Los numeros ordenados de forma ascendente son :");
console.log("*****************");
mostrarArray(numbers.reverse((a, b) => {
    var result = a < b ? -1 : a > b ? 1 : 0;
    return result;
}), "Los numeros ordenados de forma descendente son :");

console.log("*****************");
console.log(numbers.length);

var busqueda = parseInt(prompt("Que valor desea buscar", 0));
var existencia = numbers.findIndex(result => result == busqueda);
console.log("*****************");
if (existencia > 0) {
    console.log(true, existencia);
} else {
    console.log(false, existencia);
}

function introduceNumbersByUser() {
    var numerosUsuario = [];
    var cont = 0;
    do {
        var numeros = parseInt(prompt("Ingresa un numero :", 0));
        numerosUsuario.push(numeros);
        cont++;
    } while (cont < 6);
    return numerosUsuario;
}

function mostrarArray(numerosArray, message) {
    document.write(`<h1>${message}</h1>`);
    document.write("<ul>")
    numerosArray.forEach(numero => {
        document.write(`<li>${numero}</li>`);
        console.log(numero);
    });
    document.write("</ul>")
}
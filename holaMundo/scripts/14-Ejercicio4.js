'use strict'

/*
    Mostrar todos los numeros impares, entre el intervalo definido por el usuario
*/

var numero1 = prompt("Ingresa el numero 1", 0);
var numero2 = prompt("Ingresa el numero 2", 0);

document.write("<h2>Los numeros entre" + numero1 + " y numero " + numero2 + " son:" + "</h2>");
printNumbers(introduceNumber(numero1, numero2));

function printNumbers(numbers) {
    if (numbers[0] <= numbers[1]) {
        for (let index = numbers[0]; index <= numbers[1]; index++) {
            if (index % 2 != 0) {
                document.write(index + "<br>");
            }
        }
    } else {
        numero1 = prompt("Ingresa el numero 1", 0);
        numero2 = prompt("Ingresa el numero 2", 0);
        printNumbers(introduceNumber(numero1, numero2));
    }
}

function introduceNumber(n1, n2) {
    while (isNaN(numero1) || isNaN(numero2)) {
        n1 = prompt("Ingresa el numero 1", 0);
        n2 = prompt("Ingresa el numero 2", 0);
    }
    return [Number(n1), Number(n2)];
}
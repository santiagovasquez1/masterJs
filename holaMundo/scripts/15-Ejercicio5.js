'use strict'

/*
Todos los numeros divisores de un numero introducido por un promp
*/
var numero = parseInt(prompt("Mete un numero", 1));

for (let index = 0; index < numero; index++) {
    if (numero % index == 0) {
        console.log(index);
    }
}
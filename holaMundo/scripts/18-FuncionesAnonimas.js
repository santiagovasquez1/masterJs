'use strict'

/*
Funciones anonimas, son mas que funciones que no tienen nombre y se guardan dentro de una variable
Se utilizan para hacer calllbacks

El callBack es nada mas que una funcion, dentro de otra funcion, funciona como los delegados en c#, 
en el ejemplo sumayMuestra y sumaporDos, son parametros de sumar y a la vez son funciones anonimas
*/

function sumar(num1, num2, sumayMuestra, sumaPorDos) {
    var suma = num1 + num2;
    sumayMuestra(suma);
    sumaPorDos(suma);
    return suma;
}

sumar(5, 7, function(dato) {
    console.log("La suma es: " + dato);
}, function(dato) {
    console.log("La suma por dos es: " + dato * 2);
});

/*
las funciones flechas son otra opción para definir las funciones 
anonimas dentro de un callback, como se puede ver en el ejemplo
en el caso de que la funcion flecha necesite mas de un parametro en la definicion deben ir los parentesis
*/

sumar(8, 10, dato => {
    console.log("La suma es: " + dato);
}, dato => {
    console.log("La suma por dos es: " + dato * 2);
});
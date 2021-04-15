'use strict'

//Parametros opcionales
function calculadora(num1, num2, mostrar = false) {
    if (mostrar) {
        document.write("Suma: " + (num1 + num2) + "<br>");
        document.write("Resta: " + (num1 - num2) + "<br>");
        document.write("Mult: " + (num1 * num2) + "<br>");
        document.write("Div: " + (num1 / num2) + "<br>");
        document.write("*******************");
    } else {
        console.log("Suma: " + (num1 + num2));
        console.log("Resta: " + (num1 - num2));
        console.log("Mult: " + (num1 * num2));
        console.log("Div: " + (num1 / num2));
        console.log("*******************");
    }

}

calculadora(2, 4);
calculadora(8, 3, true);
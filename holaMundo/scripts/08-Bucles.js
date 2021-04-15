'use strict'
var limit = 100;

for (let index = 0; index < limit; index++) {
    console.log('Vamos por el numero ' + index);
}

//Bucle while
var year = 2018
var limitYear = 2051
while (year < limitYear) {
    console.log(year);
    year += 2;
}

var years = 20;

do {
    alert("Solo cuando sea diferente a 20");
    years = 20;
} while (years != 20);
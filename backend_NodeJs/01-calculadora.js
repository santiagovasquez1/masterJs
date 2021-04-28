'use strict'
var params = process.argv.slice(2);
var numero1 = parseFloat(params[0]);
var numero2 = parseFloat(params[1]);

var plantilla = `
Suma: ${numero1+numero2}
Resta: ${numero1-numero2}
Multiplicacion: ${numero1*numero2}
Division: ${numero1/numero2}
`;
Math.pow
console.log(plantilla);
console.log("Hola mundo con nodeJs");

/*
Express permite trabajar con los protocolos http
Node parser Convierte las peticiones al backend en json
Connect-Multiparty, permite subir archivos al backend
mongus es un orm que nos permite trabajar con mongo db, permite trabajar con mongodb desde js
nodemon, refresca el servidor automaticamente, cuando se hagan cambios en el backend
*/
'use strict'

//Trabajo con fechas
var fecha = new Date();
var year = fecha.getFullYear();

//los meses empiezan desde 0
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();

var textoHora = `
    El año es :${year}
    El mes es :${mes}
    El dia es :${dia}
    La hora es :${hora}
`;

console.log(textoHora);

//Funciones matematicas
console.log(Math.random());
//Redondea los decimales
console.log(Math.ceil(Math.random() * 10));
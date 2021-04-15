'use strict'

var nombre = prompt("Mete tu nombre");
var apellidos = prompt("Mete tus apellidos");

var texto = `
    <h1>Hola que tal </h1> 
    <table border=1px>
        <tr>
            <th><h3>Nombre</h3></th>
            <th><h3>Apellido</h3></th>
            <th><h3>Input</h3></th>
        </tr>
        <tr>
            <td>${nombre}</td>
            <td>${apellidos}</td>
            <td><input type="text"></td>
        </tr>
    </table>
    `;

document.write(texto);
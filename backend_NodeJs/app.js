//Archivo encargado de las peticiones htpp
'use strict'
var express = require('express');
var bodyParser = require('body-parser');
const { response, request } = require('express');



var app = express();


//cargar archivos de rutas


//middleware, metodos que se ejecuta antes de la accion de un controlador
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Cors



//rutas
app.get('/test', (request, response) => {
    response.status(200).send({
        message: 'Hola mundo desde el backend'
    });
});

app.get('/', (request, response) => {
    var plantilla = `<h1>Pagina de inicio</h1>`
    response.status(200).send(plantilla);
});

app.post('/test/:id', (request, response) => {
    console.log(request.body.name);
    // console.log(request.query.web);
    console.log(request.params.id);
    response.status(200).send({
        message: 'Hola mundo desde el backend',
        body: request.body
    });
});

//exportar modulo
module.exports = app;
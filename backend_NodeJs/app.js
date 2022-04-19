//Archivo encargado de las peticiones htpp
'use strict'
var express = require('express');
var bodyParser = require('body-parser');
const { response, request } = require('express');
var app = express();

//cargar archivos de rutas
var projectRoutes = require('./routes/projectsRoutes');

//middleware, metodos que se ejecuta antes de la accion de un controlador
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//rutas
app.use('/api', projectRoutes);

//exportar modulo
module.exports = app;
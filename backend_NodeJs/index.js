//Fichero principal, para la configuracion del backend
'use strcit'

const { response } = require('express');
var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/PortafolioDb')
    .then(result => {
        console.log('Conexión establecida con exito');

        //Creacion del servidor
        app.listen(port, () => {
            console.log('Servidor corriendo correctamente en url: localhost:3700');
        });


    }).catch(error => {
        console.log(error);
    });
//Fichero principal, para la configuracion del backend
'use strcit'
const { response } = require('express');
var app = require('./app');
var port = 3800;

const AWS = require("aws-sdk");
AWS.config.update({
    region: 'us-east-1'
});

const dynamoose = require('dynamoose');

AWS.config.getCredentials(function(err) {
    if (err) console.log(err.stack);
    // credentials not loaded
    else {
        app.listen(port, () => {
            console.log('Servidor corriendo correctamente en url: localhost:3700');
        });

        console.log("Sesion Token: ", AWS.config.credentials.accessKeyId);
        console.log("Region: ", AWS.config.region);

    }
});
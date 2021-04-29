//Fichero principal, para la configuracion del backend
'use strcit'



const { response } = require('express');
var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

const AWS = require("aws-sdk");
AWS.config.update({ region: 'REGION' });
var dynamodb = new AWS.DynamoDB();
var param = {}

function getDynamoTables() {
    return new Promise((resolve, reject) => {
        dynamodb.listTables({}, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}

var tables = getDynamoTables();
console.log(tables);
// AWS.config.getCredentials(function(err) {
//     if (err) console.log(err.stack);
//     // credentials not loaded
//     else {
//         console.log("Access key:", AWS.config.credentials.accessKeyId);
//         console.log("Region: ", AWS.config.region);
//     }
// });

// app.listen(port, () => {
//     console.log('Servidor corriendo correctamente en url: localhost:3700');
// });

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/PortafolioDb')
//     .then(result => {
//         console.log('Conexión establecida con exito');

//         //Creacion del servidor
//         app.listen(port, () => {
//             console.log('Servidor corriendo correctamente en url: localhost:3700');
//         });


//     }).catch(error => {
//         console.log(error);
//     });
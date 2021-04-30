//Fichero principal, para la configuracion del backend
'use strcit'
const { response } = require('express');
var app = require('./app');
var port = 3700;

const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-east-1' });

AWS.config.getCredentials(function(err) {
    if (err) console.log(err.stack);
    // credentials not loaded
    else {

        var ddb = new AWS.DynamoDB();
        var param = {}

        ddb.listTables({ Limit: 10 }, function(err, data) {
            if (err) {
                console.log("Error", err.code);
            } else {
                console.log("Table names are ", data.TableNames);
            }
        });

        app.listen(port, () => {
            console.log('Servidor corriendo correctamente en url: localhost:3700');
        });

        console.log("Access key:", AWS.config.credentials.accessKeyId);
        console.log("Region: ", AWS.config.region);

    }
});
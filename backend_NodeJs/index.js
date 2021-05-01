//Fichero principal, para la configuracion del backend
'use strcit'
const { response } = require('express');
var app = require('./app');
var port = 3700;

const AWS = require("aws-sdk");
AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION
});

const dynamoose = require('dynamoose');

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

        var Cat = dynamoose.model('Cat', { id: Number, name: String });
        var garfield = new Cat({ id: 666, name: 'Garfield' });
        garfield.save();

        app.listen(port, () => {
            console.log('Servidor corriendo correctamente en url: localhost:3700');
        });

        // console.log("Region: ", AWS.config.region);
    }
});
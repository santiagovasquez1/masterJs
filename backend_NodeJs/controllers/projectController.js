'Use strict'
const Project = require('../models/projectModel');
const dynamoose = require('dynamoose');
const tableName = "projects";
var AWS = require('aws-sdk');

AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION
});
const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

var ProjectController = {
    home: function(req, res) {
        return res.status(200).send({
            message: 'Soy la Home',
        });
    },

    test: function(req, res) {
        return res.status(200).send({
            message: 'Soy el metodo test del controlador de project'
        });
    },

    saveProject: function(req, res) {
        var project = new Project()

        var params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;

        project.langs = params.langs;
        project.image = params.image;

        project.save((err, projectStored) => {
            if (err) {
                return res.status(500).send({
                    message: "Error al crear projecto"
                });
            }
            if (!projectStored) {
                return res.status(404).send({
                    message: "No se ha podido guardar el projecto"
                });
            }
            return res.status(200).send({
                project: projectStored
            });

        });
    },

    getProject: function(req, res) {

        var projectId = req.params.id;

        if (projectId == null || projectId == undefined) {
            return res.status(500).send({
                message: "Error al crear projecto",
                err: "projectId no puede ser nulo"
            });
        }

        var params = {
            FilterExpression: "id = :i",
            ExpressionAttributeValues: {
                ":i": { S: projectId }
            },
            TableName: tableName
        };

        ddb.scan(params, (err, projectResult) => {
            if (err) {
                return res.status(500).send({
                    message: "Error al crear projecto",
                    error: err
                });
            }
            if (!projectResult) {
                return res.status(404).send({
                    message: "No se ha podido guardar el projecto"
                });
            }
            return res.status(200).send({
                project: projectResult.Items[0]
            });
        });
    },

    getProjects: function(req, res) {
        var params = {
            TableName: tableName
        };

        ddb.scan(params, (err, projectResult) => {
            if (err) {
                return res.status(500).send({
                    message: "No se han podido cargar los projectos",
                    error: err
                });
            }
            if (!projectResult) {
                return res.status(404).send({
                    message: "No se han podido cargar los projectos"
                });
            }
            return res.status(200).send({
                project: projectResult.Items
            });
        });
    },

    updateProject: function(req, res) {
        var projectId = req.params.id;
        var update = req.body;

        if (projectId == null || projectId == undefined) {
            return res.status(500).send({
                message: "Error al crear projecto",
                err: "projectId no puede ser nulo"
            });
        }

        var params = {
            TableName: tableName,
            Key: {
                "id": {
                    S: projectId
                }
            },
            UpdateExpression: "set name = :n, description = :d, category = :c, year = :y, lenguajes = :l, image = :i ",
            ExpressionAttributeValues: {
                ":n": { S: update.name },
                ":d": { S: update.description },
                ":c": { S: update.category },
                ":y": { N: update.year.toString() },
                ":l": { S: update.langs },
                ":i": { S: update.image }
            },
            ReturnValues: "UPDATED_NEW"
        };

        updateDataBase(params, res);
    },

    deleteProject: function(req, res) {
        var projectId = req.params.id;
        var params = {
            TableName: tableName,
            Key: {
                "id": {
                    S: projectId
                }
            },
        };

        ddb.deleteItem(params, (err, result) => {
            if (err) {
                return res.status(500).send({
                    message: "Error al eliminar el proyecto",
                    error: err
                });
            }
            if (!result) {
                return res.status(404).send({
                    message: "No existe el poyecto para eliminar",
                });
            }
            return res.status(200).send({
                project: result
            });
        });
    },

    uploadImage: function(req, res) {
        var projectId = req.params.id;
        var fileName = 'Imagen no subida';

        if (req.files) {
            var filePath = req.files.image.path;
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1];

            var params = {
                TableName: tableName,
                Key: {
                    "id": {
                        S: projectId
                    }
                },
                UpdateExpression: "set image = :i ",
                ExpressionAttributeValues: {
                    ":i": { S: fileName }
                },
                ReturnValues: "UPDATED_NEW"
            };

            updateDataBase(params, res);
        } else {
            return res.status(200).send({
                message: fileName
            });
        }
    }
}

module.exports = ProjectController;

function updateDataBase(params, res) {
    ddb.updateItem(params, (err, projectUpdate) => {
        if (err) {
            return res.status(500).send({
                message: "Error al actualizar el proyecto",
                error: err
            });
        }
        if (!projectUpdate) {
            return res.status(404).send({
                message: "No existe el poyecto para actualizar",
            });
        }
        return res.status(200).send({
            project: projectUpdate
        });
    });
}
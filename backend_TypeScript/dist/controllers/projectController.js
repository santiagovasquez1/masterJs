"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const projectModel_1 = require("../models/projectModel");
const express = require("express");
const eventLog_1 = require("../eventLog");
const awsConnection_1 = require("../awsConnection");
const fs = require('fs');
const multpart = require('connect-multiparty');
const multipartMiddelware = multpart({
    uploadDir: 'uploads'
});
class ProjectController {
    constructor() {
        this.router = express.Router();
        this.projectControllerLogger = eventLog_1.eventLogSingleton;
        this.awsDynamoDbConnection = awsConnection_1.AwsDynamoDbConnectionSingleton;
        this.tableName = "projects";
        this.projectControllerLogger.log('projectController instance constructed');
        this.initalizeRoutes();
    }
    initalizeRoutes() {
        this.router.get('/home', this.home.bind(this));
        this.router.get('/get', this.getProjectById.bind(this));
        this.router.post('/saveProject', this.saveProject.bind(this));
        this.router.put('/updateProject/:id', this.uploadProject.bind(this));
        this.router.delete('/deleteProject/:id', this.deleteProject.bind(this));
        this.router.post('/upLoadImage/:id', multipartMiddelware, this.uploadImage.bind(this));
    }
    home(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.projectControllerLogger.log('home has been invoked sucessfull');
            let params = {
                TableName: this.tableName
            };
            this.awsDynamoDbConnection.awsDynamoDb.scan(params, (err, data) => {
                if (err) {
                    this.projectControllerLogger.log(err.stack);
                    return res.status(500).send({
                        message: "Error al crear projecto"
                    });
                }
                if (!data) {
                    this.projectControllerLogger.log("No se ha podido guardar el projecto");
                    return res.status(404).send({
                        message: "No se ha podido guardar el projecto"
                    });
                }
                this.projectControllerLogger.log("Datos cargados correctamente");
                return res.status(200).send({
                    projects: data.Items.map(item => {
                        var project = item;
                        return project;
                    })
                });
            });
        });
    }
    getProjectById(req, res) {
        let projectId = req.params.id;
        if (projectId == null || projectId == undefined) {
            return res.status(500).send({
                message: "Error al cargar projecto",
                err: "projectId no puede ser nulo"
            });
        }
        let params = {
            FilterExpression: "id = :i",
            ExpressionAttributeValues: {
                ":i": { S: projectId }
            },
            TableName: this.tableName
        };
        this.projectControllerLogger.log("Ejecutando getProjectById");
        this.awsDynamoDbConnection.awsDynamoDb.scan(params, (err, projectResult) => {
            if (err) {
                this.projectControllerLogger.log(err.stack);
                return res.status(500).send({
                    message: "Error al crear projecto",
                    error: err
                });
            }
            if (!projectResult) {
                this.projectControllerLogger.log("No se ha obtenido ningun objeto");
                return res.status(404).send({
                    message: "No se ha obtenido ningun objeto"
                });
            }
            this.projectControllerLogger.log("Datos cargados correctamente");
            return res.status(200).send({
                project: projectResult.Items[0]
            });
        });
    }
    saveProject(req, res) {
        let params = req.body;
        let project = new projectModel_1.default();
        project.projectName = { S: params.projectName };
        project.category = { S: params.category };
        project.description = { S: params.description };
        project.projectYear = { N: params.projectYear };
        project.lenguajes = { S: params.lenguajes };
        params = {
            TableName: "projects",
            Item: project
        };
        this.projectControllerLogger.log("Ejecutando  saveProject");
        this.awsDynamoDbConnection.awsDynamoDb.putItem(params, (err, data) => {
            if (err) {
                this.projectControllerLogger.log(err.stack);
                return res.status(500).send({
                    message: "Error al crear projecto"
                });
            }
            if (!data) {
                this.projectControllerLogger.log("No se ha podido guardar el projecto");
                return res.status(404).send({
                    message: "No se ha podido guardar el projecto"
                });
            }
            this.projectControllerLogger.log("Datos cargados correctamente");
            return res.status(200).send({
                projects: project
            });
        });
    }
    uploadProject(req, res) {
        this.projectControllerLogger.log("ejecutando uploadProject");
        let projectId = req.params.id;
        let update = req.body;
        let params = {
            TableName: this.tableName,
            Key: {
                "id": {
                    S: projectId
                }
            },
            UpdateExpression: "set projectName = :n, description = :d, category = :c, projectYear = :y, lenguajes = :l, image = :i ",
            ExpressionAttributeValues: {
                ":n": { S: update.projectName },
                ":d": { S: update.description },
                ":c": { S: update.category },
                ":y": { N: update.projectYear.toString() },
                ":l": { S: update.lenguajes },
                ":i": { S: update.image }
            },
            ReturnValues: "UPDATED_NEW"
        };
        this.updateDataBase(params, res);
    }
    deleteProject(req, res) {
        let projectId = req.params.id;
        let params = {
            TableName: this.tableName,
            Key: {
                "id": {
                    S: projectId
                }
            },
        };
        this.awsDynamoDbConnection.awsDynamoDb.deleteItem(params, (err, result) => {
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
                project: result.Attributes
            });
        });
    }
    uploadImage(req, res) {
        let projectId = req.params.id;
        let fileName = 'Imagen no subida';
        if (req.files) {
            let filePath = req.files.image.path;
            let fileSplit = filePath.split('/');
            fileName = fileSplit[2];
            let fileExt = fileName.split('.')[1];
            if (fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif') {
                let params = {
                    TableName: this.tableName,
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
                this.updateDataBase(params, res);
            }
            else {
                fs.unlink(filePath, (err) => {
                    return res.status(200).send({
                        message: 'La extension no es valida'
                    });
                });
            }
        }
        else {
            return res.status(200).send({
                message: fileName
            });
        }
    }
    updateDataBase(params, res) {
        this.awsDynamoDbConnection.awsDynamoDb.updateItem(params, (err, projectUpdate) => {
            if (err) {
                this.projectControllerLogger.log(err.stack);
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
}
exports.default = ProjectController;
//# sourceMappingURL=projectController.js.map
import projectModels from "../models/projectModel";
import * as express from 'express';
import { eventLog, eventLogSingleton } from "../eventLog";
import { AwsDynamoDbConnection, AwsDynamoDbConnectionSingleton } from "../awsConnection";

const fs = require('fs');
const path = require('path');
const multpart = require('connect-multiparty');
const multipartMiddelware = multpart({
    uploadDir: 'uploads'
});

class ProjectController {

    public router = express.Router();
    private projectControllerLogger: eventLog = eventLogSingleton;
    private awsDynamoDbConnection: AwsDynamoDbConnection = AwsDynamoDbConnectionSingleton;
    private readonly tableName = "projects";

    constructor() {
        this.projectControllerLogger.log('projectController instance constructed');
        this.initalizeRoutes();
    }

    initalizeRoutes() {
        this.router.get('/home', this.home.bind(this));
        this.router.get('/get/:id', this.getProjectById.bind(this));
        this.router.post('/saveProject', this.saveProject.bind(this));
        this.router.put('/updateProject/:id', this.uploadProject.bind(this));
        this.router.delete('/deleteProject/:id', this.deleteProject.bind(this));
        this.router.post('/upLoadImage/:id', multipartMiddelware, this.uploadImage.bind(this));
        this.router.get('/getImage/:image', this.getImageFile.bind(this));
    }

    home(req: express.Request, res: express.Response) {

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
                    var project = item as unknown as projectModels
                    return project;
                })
            });
        });
    }

    getProjectById(req: express.Request, res: express.Response) {
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
                project: projectResult.Items[0] as unknown as projectModels
            });
        });
    }

    saveProject(req: express.Request, res: express.Response) {

        let params = req.body;
        let project = new projectModels();

        project.projectName = { S: params.projectName };
        project.category = { S: params.category };
        project.description = { S: params.description };
        project.projectYear = { N: params.projectYear.toString() };
        project.lenguajes = { S: params.lenguajes };

        params = {
            TableName: "projects",
            Item: project
        }
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

    uploadProject(req: express.Request, res: express.Response) {
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

    deleteProject(req: express.Request, res: express.Response) {

        let projectId = req.params.id;

        let params = {
            TableName: this.tableName,
            Key: {
                "id": {
                    S: projectId
                }
            },
        };
        this.projectControllerLogger.log("ejecutando deleteProject");
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
            this.projectControllerLogger.log("Datos borrados");
            return res.status(200).send({
                project: result.Attributes as unknown as projectModels
            });
        });
    }

    uploadImage(req, res: express.Response) {
        let projectId = req.params.id;
        let fileName = 'Imagen no subida';
        this.projectControllerLogger.log("ejecutando uploadImage");
        if (req.files) {
            let filePath = req.files.image.path;
            let fileSplit = filePath.split('\\');
            fileName = fileSplit[1];

            let fileExt = fileName.split('.')[1].toLowerCase();
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
            } else {
                fs.unlink(filePath, (err) => {
                    this.projectControllerLogger.log("error al ejecutar uploadImage");
                    return res.status(200).send({
                        message: 'La extension no es valida'
                    });
                });
            }
        } else {
            this.projectControllerLogger.log("error al ejecutar uploadImage");
            return res.status(200).send({
                message: fileName
            });
        }
    }

    getImageFile(req: express.Request, res: express.Response) {
        var file = req.params.image;
        var path_file = `uploads//${file}`;

        fs.exists(path_file, (exists) => {
            if (exists) {
                return res.sendFile(path.resolve(path_file));
            } else {
                return res.status(200).send({
                    message: "No existe la imagen"
                })
            }
        });
    }

    updateDataBase(params, res: express.Response) {
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
            this.projectControllerLogger.log("Base de datos actualizada");
            return res.status(200).send({
                project: projectUpdate as unknown as projectModels
            });
        });
    }



}

export default ProjectController;
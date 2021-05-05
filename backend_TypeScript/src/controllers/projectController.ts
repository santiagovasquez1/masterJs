import projectModels from "../models/projectModel";
import * as express from 'express';
import * as Aws from 'aws-sdk';
import { eventLog, eventLogSingleton } from "../eventLog";
import { count } from "node:console";
import { AwsDynamoDbConnection, AwsDynamoDbConnectionSingleton } from "../awsConnection";

class ProjectController {

    public path = 'api';
    public router = express.Router();
    public multpart: any;
    public multipartMiddelware;
    private projectControllerLogger: eventLog = eventLogSingleton;
    private projects: projectModels[] = [];
    private awsDynamoDbConnection: AwsDynamoDbConnection = AwsDynamoDbConnectionSingleton;

    constructor() {
        this.projectControllerLogger.log('projectController instance constructed');
        this.initalizeRoutes();
        this.multpart = require('connect-multiparty');
        this.multipartMiddelware = this.multpart({
            uploadDir: 'uploads'
        });
    }

    initalizeRoutes() {
        this.router.get('/home', this.home.bind(this));
        this.router.post('/saveProject', this.saveProject.bind(this));
        // this.router.post('/upLoadImage/:id', this.multipartMiddelware, this.uploadImage.bind(this));
    }

    home(req: express.Request, res: express.Response) {

        this.projectControllerLogger.log('home has been invoked sucessfull');
        let params = {
            TableName: "projects"
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

    saveProject(req: express.Request, res: express.Response) {

        let params = req.body;
        let project = new projectModels();

        project.projectName.S = params.projectName;
        this.projectControllerLogger.log("Iniciando la carga en BD");
        project.category.S = params.category;
        project.description.S = params.description;
        project.projectYear.N = params.projectYear.toString();
        project.lenguajes.S = params.lenguajes;

        params = {
            TableName: "projects",
            Item: project
        }
        this.projectControllerLogger.log("Iniciando la carga en BD");
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
            console.log(data)
            return res.status(200).send({
                projects: data as unknown as projectModels
            });
        });

    }

    uploadImage(req: express.Request, res: express.Response) {
        return res.status(200).send({
            headers: req.headers,
            message: 'Soy upload',
        });
    }

}

export default ProjectController;
import projectModels from "../models/projectModel";
import * as express from 'express';
import * as Aws from 'aws-sdk';
import { eventLog, eventLogSingleton } from "../eventLog";
import { count } from "node:console";

class ProjectController {

    public path = 'api';
    public router = express.Router();
    public multpart: any;
    public multipartMiddelware;
    private projectControllerLogger: eventLog = eventLogSingleton;
    private projects: projectModels[] = [];

    constructor() {
        this.projectControllerLogger.log('projectController instance constructed');
        this.initalizeRoutes();
        this.multpart = require('connect-multiparty');
        this.multipartMiddelware = this.multpart({
            uploadDir: 'uploads'
        });
    }

    initalizeRoutes() {
        this.router.post('/home', this.home.bind(this));
        // this.router.post('/upLoadImage/:id', this.multipartMiddelware, this.uploadImage.bind(this));
    }

    //Debe ser funcion flecha para acceder a los elementos de la clase
    home(req: express.Request, res: express.Response) {

        // let params = {
        //     TableName: "projects"
        // };

        // this.dynamoDb.scan(params, (err, projects)=>{
        //     if (err) {
        //         return res.status(500).send({
        //             message: "Error al crear projecto",
        //             error: err
        //         });
        //     }
        //     if (!projects) {
        //         return res.status(404).send({
        //             message: "No se ha podido guardar el projecto"
        //         });
        //     }
        //     return res.status(200).send({
        //         project: projects.Items
        //     });
        // });

        let project = new projectModels();
        let params = req.body;
        if (params.projectName) {
            project.projectName = params.projectName
            project.category = params.category;
            project.description = params.description;
            project.projectYear = params.projectYear;
            project.lenguajes = params.lenguajes;
            project.image = params.image;
            this.projects.push(project);
            this.projectControllerLogger.log('home has been invoked sucessfull');
            return res.status(200).send({
                project: this.projects,
                eventLog:  this.projectControllerLogger.Lastlog,
                counts:this.projectControllerLogger.count
            });
        } else {
            this.projectControllerLogger.log('El cuerpo de la peticion no puede estar vacio');
            return res.status(400).send({
                projectControllerLogger: this.projectControllerLogger.Lastlog,
                counts:this.projectControllerLogger.count
            });
        }
    }

    uploadImage(req: express.Request, res: express.Response) {
        return res.status(200).send({
            headers: req.headers,
            message: 'Soy upload',
        });
    }

}

export default ProjectController;
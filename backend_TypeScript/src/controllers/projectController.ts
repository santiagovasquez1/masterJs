import { projectModels } from "../models/projectModel";
import * as express from 'express';
import * as Aws from 'aws-sdk';
import { eventLog, eventLogSingleton } from "../eventLog";

export class ProjectController {

    proectModel: projectModels;
    public path = 'api';
    public router = express.Router();
    public multpart: any;
    public multipartMiddelware;
    private projectControllerLogger: eventLog = eventLogSingleton;

    constructor() {
        this.projectControllerLogger.log('projectController instance constructed');
        this.initalizeRoutes();
        this.multpart = require('connect-multiparty');
        // this.multipartMiddelware = this.multpart({
        //     uploadDir: 'uploads'
        // });
    }

    initalizeRoutes() {
        this.router.get('/home', this.home);
        // this.router.post('/upLoadImage/:id', this.multipartMiddelware, this.uploadImage, result => {
        //     console.log(result);
        // });
        this.router.post('/upLoadImage/:id', this.uploadImage);
    }

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
        // let project = new projectModels();
        // let params = <projectModels>req.body;
        // project.projectName = params.projectName
        // project.category = params.category;
        // project.description = params.description;
        // project.lenguajes = params.lenguajes;
        // project.image = params.image;
        this.projectControllerLogger.log("Invocacion del metodo home");
        return res.status(200).send({
            logger: this.projectControllerLogger.count
        });
    }

    uploadImage(req: express.Request, res: express.Response) {
        return res.status(200).send({
            headers: req.headers,
            message: 'Soy upload',
        });
    }

}
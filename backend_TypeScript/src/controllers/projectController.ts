import { projectModels } from "../models/projectModel";
import * as express from 'express';

export class ProjectController {

    proectModel: projectModels;
    public path = 'api';
    public router = express.Router();
    public multpart: any;
    public multipartMiddelware;

    constructor() {
        this.initalizeRoutes();
        this.multpart = require('connect-multiparty');
        this.multipartMiddelware = this.multpart({
            uploadDir: '/uploads'
        });
    }

    initalizeRoutes() {
        this.router.get('/home', this.home);
        this.router.post('/upLoadImage/:id', this.multipartMiddelware, this.uploadImage);
    }

    home(req: express.Request, res: express.Response) {
        return res.status(200).send({
            headers: req.headers,
            message: 'Soy la Home',
        });
    }

    uploadImage(req: express.Request, res: express.Response) {
        return res.status(200).send({
            headers: req.headers,
            message: 'Soy upload',
        });
    }

}
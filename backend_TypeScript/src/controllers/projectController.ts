import { projectModels } from "../models/projectModel";
import * as express from 'express';

export class ProjectController {

    proectModel: projectModels;
    public path = 'api';
    public router = express.Router();

    constructor() {
        this.initalizeRoutes();
    }

    initalizeRoutes() {
        this.router.get('/home', this.home);
    }

    home(req: express.Request, res: express.Response) {
        return res.status(200).send({
            headers: req.headers,
            message: 'Soy la Home',
        });
    }
}
import { Router } from "express";
import express = require("express");

// export class projectRoutes  {

// }

var router = express.Router();
var multpart = require('connect-multiparty');
var multipartMiddelware = multpart({
    uploadDir: 'backend_NodeJs/uploads'
});

// router.get('/home', ProjectController.home);
// router.post('/test', ProjectController.test);
// router.post('/save-project', ProjectController.saveProject);
// router.get('/get/:id?', ProjectController.getProject);
// router.get('/getAll', ProjectController.getProjects);
// router.put('/update/:id', ProjectController.updateProject);
// router.put('/upLoadImage/:id', multipartMiddelware, ProjectController.uploadImage);

module.exports = router;
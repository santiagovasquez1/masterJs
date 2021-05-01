'use strict'

var express = require('express');
var ProjectController = require('../controllers/projectController');

var router = express.Router();

//Midleware para el multipar
var multpart = require('connect-multiparty');
var multipartMiddelware = multpart({
    uploadDir: '../uploads'
});

router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save-project', ProjectController.saveProject);
router.get('/get/:id?', ProjectController.getProject);
router.get('/getAll', ProjectController.getProjects);
router.put('/update/:id', ProjectController.updateProject);
router.post('/upLoadImage/:id', multipartMiddelware, ProjectController.uploadImage);
module.exports = router;
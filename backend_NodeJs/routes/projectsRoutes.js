'use strict'

var express = require('express');
var ProjectController = require('../controllers/projectController');

var router = express.Router();

router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save-project', ProjectController.saveProject);

module.exports = router;
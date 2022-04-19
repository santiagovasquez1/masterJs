'Use strict'
const dynamoose = require('dynamoose');
var Schema = dynamoose.Schema;
const { v4: uuidv4, stringify } = require('uuid');

var projectSchema = new Schema({
    id: {
        type: String,
        hashKey: true,
        default: uuidv4
    },
    projectName: String,
    description: String,
    category: String,
    projectYear: Number,
    lenguajes: String,
    image: String,
});



module.exports = dynamoose.model('projects', projectSchema);
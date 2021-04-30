'Use strict'
const dynamoose = require('dynamoose');
var Schema = dynamoose.Schema;
const { v4: uuidv4 } = require('uuid');

var projectSchema = new Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: String,
    image: String,
});

module.exports = dynamoose.model('projects', projectSchema);
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
    name: String,
    description: String,
    category: String,
    year: Number,
    lenguajes: String,
    image: String,
});



module.exports = dynamoose.model('projects', projectSchema);
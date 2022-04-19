"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AWS = require("aws-sdk");
const eventLog_1 = require("./eventLog");
class AwsDynamoDbConnection {
    constructor() {
        this.eventLoger = eventLog_1.eventLogSingleton;
        this.region = 'us-east-1';
        this.checkConnection();
    }
    checkConnection() {
        AWS.config.getCredentials((err, data) => {
            if (err) {
                this.eventLoger.log(err.stack);
                console.log(err.stack);
            }
            else {
                this.eventLoger.log("Conexion iniciada con aws-sdk");
                AWS.config.update({ region: this.region });
                this.initAwsDynamoDb();
            }
        });
    }
    initAwsDynamoDb() {
        this.awsDynamoDb = new AWS.DynamoDB();
        this.awsDynamoDb.config.update({
            region: this.region
        });
    }
}
exports.AwsDynamoDbConnection = AwsDynamoDbConnection;
exports.AwsDynamoDbConnectionSingleton = new AwsDynamoDbConnection();
//# sourceMappingURL=awsConnection.js.map
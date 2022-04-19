import * as AWS from 'aws-sdk';
import { eventLog, eventLogSingleton } from './eventLog';

export class AwsDynamoDbConnection {
    private region: string;
    public awsDynamoDb: AWS.DynamoDB;
    private eventLoger: eventLog = eventLogSingleton;

    constructor() {
        this.region = 'us-east-1';
        this.checkConnection();
    }

    private checkConnection() {

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

    private initAwsDynamoDb() {
        this.awsDynamoDb = new AWS.DynamoDB();
        this.awsDynamoDb.config.update({
            region: this.region
        });
    }
}

export const AwsDynamoDbConnectionSingleton = new AwsDynamoDbConnection();
import * as AWS from 'aws-sdk';

export class AwsDynamoDbConnection {

    private awsApp: AWS.Connect;
    private region: string;
    public awsDynamoDb: AWS.DynamoDB;

    constructor() {
        this.awsApp = new AWS.Connect();
        this.region = 'us-east-1';
        this.checkConnection();
    }

    private checkConnection() {

        AWS.config.getCredentials((err, data) => {
            if (err) {
                console.log(err.stack);
            }
            else {
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
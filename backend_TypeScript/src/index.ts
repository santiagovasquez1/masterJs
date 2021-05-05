import App from './app';
import { AwsDynamoDbConnectionSingleton, AwsDynamoDbConnection } from './awsConnection';
import ProjectController from './controllers/projectController';
import { eventLog, eventLogSingleton } from './eventLog';

const eventLoger: eventLog = eventLogSingleton;
const awsDynamoDbConnection: AwsDynamoDbConnection = AwsDynamoDbConnectionSingleton;
var port = 3700;

if (awsDynamoDbConnection.awsDynamoDb != undefined || awsDynamoDbConnection.awsDynamoDb != null) {
    eventLoger.log('Starting the app.');
    const app = new App(
        [
            
            new ProjectController()
        ],
        port,
    );
    app.listen();
} else {
    eventLoger.log('Exit program');
}

import { ProjectController } from './controllers/projectController';
import { App } from "./app";
import { eventLog, eventLogSingleton } from './eventLog';

const eventLoger: eventLog = eventLogSingleton;
var port = 4800;

eventLoger.log('Starting the app.');
const app = new App(
    [
        new ProjectController()
    ],
    port,
);
app.listen();

// AWS.config.update({
//     region: 'us-east-1'
// });
// AWS.config.getCredentials(function (err) {
//     if (err) console.log(err.stack);
//     // credentials not loaded
//     else {
//         console.log("Sesion Token: ", AWS.config.credentials.accessKeyId);
//         console.log("Region: ", AWS.config.region);
//         const app = new App(
//             [
//                 new ProjectController(new AWS.DynamoDB({ apiVersion: '2012-08-10' }))
//             ],
//             port,
//         );
//         app.listen();
//     };
// });
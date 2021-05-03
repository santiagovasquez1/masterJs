import { ProjectController } from './controllers/projectController';
import { App } from "./app";


var port = 3700;
const app = new App(
    [
        new ProjectController(),
    ],
    port,
);

app.listen();

// AWS.config.getCredentials(function(err) {
//     if (err) console.log(err.stack);
//     // credentials not loaded
//     else {
//         app.listen(port, () => {
//             console.log('Servidor corriendo correctamente en url: localhost:3700');
//         });

//         console.log("Sesion Token: ", AWS.config.credentials.accessKeyId);
//         console.log("Region: ", AWS.config.region);

//     }
// });
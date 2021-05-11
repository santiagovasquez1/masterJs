import * as express from 'express';
import * as bodyParser from 'body-parser';
import { eventLog, eventLogSingleton } from './eventLog';

class App {
    public app: express.Application;
    public port: number;
    private appLogger: eventLog = eventLogSingleton;

    constructor(controllers, port) {
        this.app = express();
        this.port = port;

        this.appLogger.log('aplication instance constructed');
        this.initializeCore();
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }

    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
        this.appLogger.log('Middleware instance constructed');
    }

    private initializeCore() {
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
            res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
            next();
        });
    }

    private initializeControllers(controllers) {
        // this.appLogger.log('Initialize controllers to application');
        controllers.forEach((controller) => {
            this.app.use('/api', controller.router);
        });
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
            console.log(`${this.appLogger.count}`)
        });
    }
}

export default App;

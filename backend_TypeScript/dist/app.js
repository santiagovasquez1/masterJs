"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const eventLog_1 = require("./eventLog");
class App {
    constructor(controllers, port) {
        this.appLogger = eventLog_1.eventLogSingleton;
        this.app = express();
        this.port = port;
        this.appLogger.log('aplication instance constructed');
        this.initializeCore();
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }
    initializeMiddlewares() {
        this.app.use(bodyParser.json());
        this.appLogger.log('Middleware instance constructed');
    }
    initializeCore() {
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
            res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
            next();
        });
    }
    initializeControllers(controllers) {
        // this.appLogger.log('Initialize controllers to application');
        controllers.forEach((controller) => {
            this.app.use('/api', controller.router);
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
            console.log(`${this.appLogger.count}`);
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const awsConnection_1 = require("./awsConnection");
const projectController_1 = require("./controllers/projectController");
const eventLog_1 = require("./eventLog");
const eventLoger = eventLog_1.eventLogSingleton;
const awsDynamoDbConnection = awsConnection_1.AwsDynamoDbConnectionSingleton;
var port = 3700;
if (awsDynamoDbConnection.awsDynamoDb != undefined || awsDynamoDbConnection.awsDynamoDb != null) {
    eventLoger.log('Starting the app.');
    const app = new app_1.default([
        new projectController_1.default()
    ], port);
    app.listen();
}
else {
    eventLoger.log('Exit program');
}
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class eventLog {
    constructor() {
        this.logs = [];
    }
    get count() {
        return this.logs.length;
    }
    log(message) {
        const timestamp = new Date().toISOString();
        this.logs.push({ message, timestamp });
        console.log(`${timestamp} - ${message}`);
    }
    get Lastlog() {
        return this.logs[this.count - 1];
    }
}
exports.eventLog = eventLog;
// Export a new Instance of the Logger class
exports.eventLogSingleton = new eventLog();
//# sourceMappingURL=eventLog.js.map
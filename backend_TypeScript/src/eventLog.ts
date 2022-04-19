export class eventLog {
    private logs: object[];

    constructor() {
        this.logs = [];
    }

    get count(): number {
        return this.logs.length
    }

    log(message: string) {
        const timestamp: string = new Date().toISOString()
        this.logs.push(
            { message, timestamp }
        )
        console.log(`${timestamp} - ${message}`)
    }

    get Lastlog(): object {
        return this.logs[this.count - 1];
    }
}

// Export a new Instance of the Logger class
export const eventLogSingleton = new eventLog()
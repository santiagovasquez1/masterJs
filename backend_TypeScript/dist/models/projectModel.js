"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const guid_typescript_1 = require("guid-typescript");
class projectModels {
    constructor() {
        var id = guid_typescript_1.Guid.create().toString();
        this.id = {
            S: id
        };
    }
}
exports.default = projectModels;
//# sourceMappingURL=projectModel.js.map
import { Guid } from "guid-typescript";

class projectModels {

    private id: {
        S: String;
    };
    projectName: {
        S: string
    };
    description: {
        S: string
    };
    category: {
        S: string
    };
    projectYear: {
        N: string
    };
    lenguajes: {
        S: string
    };
    image: {
        S: string
    };

    constructor() {
        this.id.S = Guid.create().toString();
    }
}

export default projectModels;
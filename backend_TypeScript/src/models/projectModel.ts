import { Guid } from "guid-typescript";

export class projectModels {

    private id: String;
    projectName: String;
    description: String;
    category: String;
    projectYear: Number;
    lenguajes: String[];
    image: String;

    constructor() {
        this.id = Guid.create().toString();
    }
}
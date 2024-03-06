export class Category {
    id: number;
    name: string;
    iconRouting: string;


    constructor(id: number, routing: string="", name: string = "") {
        this.id = id;
        this.name = name;
        this.iconRouting=routing;
    }

}

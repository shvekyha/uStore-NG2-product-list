

export class Product{
    public id : number;
    public name : string;
    public description : string;
    public thumbnailURL : string;

    constructor(id:number, name:string, description:string, thumbnailURL:string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.thumbnailURL = thumbnailURL;
    }
}
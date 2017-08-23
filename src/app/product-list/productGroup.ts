import { Product } from './product';


export class ProductGroup {
    public id : number;
    public name : string;
    public description : string;
    public productList : Product[];

    constructor(id : number, name : string, description : string, productList : Product[]){
        this.id = id;
        this.name = name;
        this.description = description;
        this.productList = productList;
    }

}
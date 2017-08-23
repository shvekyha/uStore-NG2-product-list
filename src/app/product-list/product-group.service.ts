import { ProductGroup } from './productGroup';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductGroupService {

  private _productGroupList : ProductGroup[];

  constructor() { 
    this._productGroupList = [];
    this.InitProductGroupList();
  }

  get productGroupList(): ProductGroup[]{
    return this._productGroupList;
  }
  
  InitProductGroupList(){
    this._productGroupList = this.GetMock();
  }

  GetMock() : ProductGroup[]{
    let productList1 : Product[] = [
      {id: 1, name: "Static", description: "Static description", thumbnailURL: "../../assets/static thumbnail.PNG"},
      {id: 2, name: "Dynamic", description: "Dynamic description", thumbnailURL: "../../assets/dynamic thumbnail.PNG"}
    ];
    let productList2 : Product[] = [
      {id: 1, name: "Composite", description: "Composite description", thumbnailURL: "../../assets/composite thumbnail.jpg"},
      {id: 2, name: "XM campaign", description: "XM campaign description", thumbnailURL: "../../assets/xm campaign thumbnail.png"}
    ];
    
    let productGroupList : ProductGroup[] = [
      {id: 1, name: "Business cards", description:"Find here business cards products", productList: productList1},
      {id: 2, name: "Other Products", description:"Find here other products", productList: productList2}
    ];

    return productGroupList;
  }
}

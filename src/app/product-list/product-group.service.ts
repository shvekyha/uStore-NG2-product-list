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
    this._productGroupList = ProductGroup.GetMock();
  }

  public getGroup(groupID : number): ProductGroup{
    let groupList : ProductGroup[] = ProductGroup.GetMock();
    let groupToReturn: ProductGroup = groupList.find(g => g.id === groupID);

    return groupToReturn;
  }
}

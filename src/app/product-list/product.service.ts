import { ProductGroup } from './product-group';
import { Product } from './product';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() { }

  public getProduct(productID : number): Product{
    let groupList : ProductGroup[] = ProductGroup.GetMock();
    
    let productToReturn: Product; 
    groupList.every(function(group){
      let product : Product = group.productList.find(p => p.id === productID);
      if (product !== undefined){
        productToReturn = product;
        return false;   // this is used to break the loop
      }
      return true;  // this is used to continue the loop
    });

    return productToReturn;

    // //another way to implement:
    // for (let i=0; i<groupList.length; i++){
    //   let product = groupList[i].productList.find(p => p.id === parseInt(productID,10));
    //   if (product !== undefined){
    //       return product;
    //   }
    // };
    // return null;
  }

  public getGroupByProductID(productID : number): ProductGroup{
    let groupList : ProductGroup[] = ProductGroup.GetMock();
    let groupToReturn: ProductGroup; 
    groupList.every(function(group){
      let product : Product = group.productList.find(p => p.id === productID);
      if (product !== undefined){
        groupToReturn = group;
        return false;   // this is used to break the loop
      }
      return true;  // this is used to continue the loop
    });

    return groupToReturn;

    // //another way to implement:
    // for (let i=0; i<groupList.length; i++){
    //   let product = groupList[i].productList.find(p => p.id === parseInt(productID,10));
    //   if (product !== undefined){
    //       return groupList[i];
    //   }
    // };
    // return null;
  }
}

import { ProductGroup } from './product-group';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
//import { Http, RequestOptions, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/map';
import { HttpHandler } from "@angular/common/http";

@Injectable()
export class ProductGroupService {

  private _productGroupList : ProductGroup[];
  private _http: HttpClient;
  private _getRealMock: boolean;

  constructor(http: HttpClient) {
    this._productGroupList = [];
    this._http = http;
    this._getRealMock = false;
    this.InitProductGroupList();
  }

  get productGroupList(): ProductGroup[]{
    return this._productGroupList;
  }

  InitProductGroupList(){
    this.GetProductGroupData();
  }

  GetProductGroupData(){
    if (this._getRealMock){
      console.log('getting mock data');
      let productGroupMock : ProductGroup[] = ProductGroup.GetMockFromWebAPI();
      this._productGroupList = productGroupMock;
    }
    else{
      console.log('getting real data');
      let headers = new HttpHeaders({'ContentType' : 'application/json'});
      let url = 'https://hadassh/ustore/api/ProductList/GetProductGroups';
      let params = 'storeid=5&userid=3&cultureid=1'
      url = `${url}?${params}`;
      this._http.get<ProductGroup[]>(url,{headers: headers})
        .subscribe(
          response => {
            console.log(response, typeof response);
            console.log('JSON.stringify(response): ' + JSON.stringify(response));
            this._productGroupList = response;
          },
          err => {
                console.log('Something went wrong! Error: '+err.message);
              }
          );
    }
  }

  public getGroup(groupID : number): ProductGroup{
    let groupList : ProductGroup[] = this._productGroupList;
    let groupToReturn: ProductGroup = groupList.find(g => g.id === groupID);

    return groupToReturn;
  }
}

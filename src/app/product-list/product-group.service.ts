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
  private _listStr: string;

  constructor(http: HttpClient) { 
    this._productGroupList = [];
    this._http = http;
    this.InitProductGroupList();
  }

  get productGroupList(): ProductGroup[]{
    return this._productGroupList;
  }

  get listStr(): string{
    return this._listStr;
  }
  
  InitProductGroupList(){
    // this is for getting the mock
    // this._productGroupList = ProductGroup.GetMock();

    // ---------------------------------------------------
    // // this is for getting the mock of the web api
    // let productGroupMock : Object[] = ProductGroup.GetMockFromWebAPI();
    // this._productGroupList = this.modifyProductGroupToList(productGroupMock);

    // ---------------------------------------------------
    // //this is for getting the real product groups from uStore controller
    // //let list: string;

    
    // let headers = new HttpHeaders({'ContentType' : 'application/json'});
    // let url = 'http://localhost/ustore/api/ProductList/GetProductGroups';
    // let params = 'storeid=5&userid=3&cultureid=1'
    // url = `${url}?${params}`;
    // this._http.get(url,{headers: headers})
    //   .subscribe(
    //     response => {
    //       console.log('response: '+response["d"]);
    //       this._listStr = JSON.stringify(response["d"])
    //     },
    //     err => {
    //           console.log('Something went wrong! Error: '+err.message);
    //         }
    //     );
        
    // //console.log('list: '+list);

    // //this._productGroupList = this.modifyProductGroupList(list);

// -------------------------------------------------------------
// //this is for testing the other api cors

let headers = new HttpHeaders({'ContentType' : 'application/json'});
let url = 'http://hadassh/ustore/api/ProductList/Get';
this._http.get(url,{headers: headers, withCredentials: true})
//let headers = new HttpHeaders({"Authorization": "hadas@xmpie.com 123"});
//let headers = new HttpHeaders({"X-Requested-With": "XMLHttpRequest"});
//this._http.get(url, {headers : headers})
  //.map((response : Response) => response.json())
  .subscribe( 
    response => {
      console.log(response, typeof response);
			console.log('JSON.stringify(response): ' + JSON.stringify(response));
			this._listStr = JSON.stringify(response);
    },
    err => {
          console.log('Something went wrong! Error: '+err.message);
        }
    );

    // ---------------------------------------------------
    // //this is for getting the real product groups from uStore web method
  //   //let list: string;

  //   //let url = '/uStore/ProductList.aspx/GetProductGroupsNoSession';
  //   let url = 'http://hadassh/uStore/ProductList.aspx/GetProductGroupsNoSession';
  //   let headers = new HttpHeaders({'ContentType' : 'application/json'});
  //   this._http.post(url, {storeID: '5', userID: '3', cultureID: '1'}, {headers: headers})
  //     .subscribe(
  //       response => {
  //         this._listStr = JSON.stringify(response["d"])
  //       },
  //       err => {
  //             console.log('Something went wrong! Error: '+err.message);
  //           }
  //       );
  //     // .subscribe(
  //     //   response => {
  //     //     console.log('response: '+response);
  //     //   },
  //     //   err => {
  //     //     console.log('Something went wrong! Error: '+err.message);
  //     //   }
  //     // );

  }

  public modifyProductGroupList(list:string) : ProductGroup[]{
    let listToReturn: ProductGroup[];
    //TODO: modify list from web method to fit the ProductGroup model 
    return listToReturn;
  }

  public modifyProductGroupToList(list: Object[]) : ProductGroup[]{
    console.log(list);
    let listToReturn: ProductGroup[];
    
    list.forEach(element => {
      let group : ProductGroup = {id: parseInt(element["groupId"],10), name: element["groupName"], description:"desc", productList: []};
      listToReturn.push(group);
    });
    console.log(listToReturn);
    return listToReturn;
  }

  public getGroup(groupID : number): ProductGroup{
    let groupList : ProductGroup[] = ProductGroup.GetMock();
    let groupToReturn: ProductGroup = groupList.find(g => g.id === groupID);

    return groupToReturn;
  }
}

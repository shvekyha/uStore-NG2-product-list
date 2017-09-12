import { ProductGroup } from './product-group';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
//import { Http, RequestOptions, URLSearchParams } from '@angular/http';

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
    //this is for getting the real product groups from uStore
    //let list: string;

    //let url = '/uStore/ProductList.aspx/GetProductGroupsNoSession';
    let url = 'https://hadassh/uStore/ProductList.aspx/GetProductGroupsNoSession';
    let headers = new HttpHeaders({'ContentType' : 'application/json'});
    this._http.post(url, {storeID: '5', userID: '3', cultureID: '1'}, {headers: headers})
      //.subscribe(response => this._listStr = response);
      .subscribe(
        response => {
          console.log('response: '+response);
        },
        err => {
          console.log('Something went wrong! Error: '+err.message);
        }
      );

    //console.log('list: '+list);

    //this._productGroupList = this.modifyProductGroupList(list);

    // // ----------------------------------------------------
    // //try to use asmx
    // let params = new HttpParams();
    // params = params.append('username', 'hadas@xmpie.com');
    // params = params.append('password', '123');
    // params = params.append('storeId', '5');
    // params = params.append('cultureId', '1');

    // this._http.get<string>('http://localhost/ustorewsapi/ProductGroupWS.asmx/GetProductGroupList', {params: params})
    //   //.subscribe(response => this._listStr = response);
    //   .subscribe(response => console.log('response: '+response));

    // ---------------------------------------------------------
    // //another try to pass param to asmx
    // let body = JSON.stringify({ username: "hadas@xmpie.com", password: "123", storeId: "5", cultureId: "1" });
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });
    
    // this.http.get('http://localhost/ustorewsapi/ProductGroupWS.asmx/op=GetProductGroupList', body, options)
    //   .subscribe(response => console.log('response: '+response));

  }

  public modifyProductGroupList(list:string) : ProductGroup[]{
    let listToReturn: ProductGroup[];
    //TODO: modify list from web method to fit the ProductGroup model 
    return listToReturn;
  }

  public getGroup(groupID : number): ProductGroup{
    let groupList : ProductGroup[] = ProductGroup.GetMock();
    let groupToReturn: ProductGroup = groupList.find(g => g.id === groupID);

    return groupToReturn;
  }
}

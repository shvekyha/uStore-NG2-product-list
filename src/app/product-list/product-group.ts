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

    static GetMock() : ProductGroup[]{
      let productList1 : Product[] = [
        {id: 1, name: "Static", description: "Static description", thumbnailURL: "./assets/static thumbnail.PNG"},
        {id: 2, name: "Dynamic", description: "Dynamic description", thumbnailURL: "./assets/dynamic thumbnail.PNG"},
        {id: 3, name: "Static2", description: "Static2 description", thumbnailURL: "./assets/static thumbnail.PNG"},
        {id: 4, name: "Dynamic2", description: "Dynamic2 description", thumbnailURL: "./assets/dynamic thumbnail.PNG"}
      ];
      let productList2 : Product[] = [
        {id: 5, name: "Composite", description: "Composite description", thumbnailURL: "./assets/composite thumbnail.jpg"},
        {id: 6, name: "XM campaign", description: "XM campaign description", thumbnailURL: "./assets/xm campaign thumbnail.png"},
        {id: 7, name: "XM campaign2", description: "XM campaign2 description", thumbnailURL: "./assets/xm campaign thumbnail.png"}
      ];
      
      let productGroupList : ProductGroup[] = [
        {id: 1, name: "Business cards", description:"Find here business cards products", productList: productList1},
        {id: 2, name: "Other products", description:"Find here other products", productList: productList2}
      ];
  
      return productGroupList;
    }

    static GetMockFromWebAPI() : ProductGroup[]{
      let returnObj : ProductGroup[];

      let productList : Product[] = [
        {"id":1,"name":"XM Pressocup","description":"","thumbnailURL":"Store_05/Product_0001/Pages/Thumbnails/Page_01.png"},
        {"id":9,"name":"static1","description":"","thumbnailURL":"Store_05/Product_0009/Pages/Thumbnails/a44bc9ad-02e6-4b29-9643-c27eef36a86b.PNG"},
        {"id":11,"name":"static2","description":"","thumbnailURL":"Store_05/Product_0011/Pages/Thumbnails/96a8dcdc-b04e-406d-bad1-782a6d0acd36.PNG"},
        {"id":12,"name":"XM Pressocup all regular pricing","description":"","thumbnailURL":"Store_05/Product_0012/Pages/Thumbnails/Page_01.png"},
        {"id":30,"name":"XM Pressocup - xm regular pricing child mixed","description":"","thumbnailURL":"Store_05/Product_0030/Pages/Thumbnails/Page_01.png"},
        {"id":18,"name":"XM Pressocup - xm excel child reg","description":"","thumbnailURL":"Store_05/Product_0018/Pages/Thumbnails/Page_01.png"},
        {"id":24,"name":"XM Pressocup all excel pricing","description":"","thumbnailURL":"Store_05/Product_0024/Pages/Thumbnails/Page_01.png"},
        {"id":36,"name":"Dynamic","description":"","thumbnailURL":"Store_05/Product_0036/Pages/Thumbnails/Page_01.jpg"}
      ];


      returnObj = [
        {
          "id":5,
          "name":"Group1",
          "description":"This is the best product group ever!",
          "productList": productList
        }
      ];

      return returnObj;
    }
}
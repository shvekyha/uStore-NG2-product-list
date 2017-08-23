import { Router } from '@angular/router';
import { Product } from './product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
    <div class="product">
      <div class="productThumbnail">
      <img class="productThumbnailImage" [src]="product.thumbnailURL" />
    </div>
    <div class="productInfo">
      <div><label class="productName">{{product.name}}</label></div>
      <span class="productDescription">{{product.description}}</span>
    </div>
    <div class="placeAnOrder">
      <button class="btnPlaceAnOrder" (click)="onClick()">Place an order ></button>
    </div>
    <hr>
  </div>
  `,
  styles: []
})
export class ProductComponent implements OnInit {

  @Input() product : Product;

  public router: Router;
  constructor(router: Router) {
    this.router = router;  
  }

  onClick(){
    this.router.navigateByUrl('productDetails');
  }

  ngOnInit() {
    
  }

}

import { Product } from './product';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-in-grid',
  template: `
    <div class="product">
      GRID
      <div class="productThumbnail">
        <img class="productThumbnailImage" [src]="product.thumbnailURL" />
      </div>
      <div class="productInfo">
        <div><label class="productName">{{product.name}}</label></div>
        <span class="productDescription">{{product.description}}</span>
      </div>
      <div class="placeAnOrder">
        <button class="btnPlaceAnOrder" (click)="placeAnOrderClicked.emit()">Place an order ></button>
      </div>
      <hr>
    </div>
  `,
  styles: []
})
export class ProductInGridComponent implements OnInit {

  @Input() product : Product;
  
  @Output() placeAnOrderClicked = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
    
  }

}

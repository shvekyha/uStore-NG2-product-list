import { ProductGroup } from './productGroup';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products-container',
  template: `
  <section class="productsContainer">
    <app-product *ngFor="let product of currentGroup.productList" [product]="product"></app-product>
  </section>
  `,
  styles: []
})
export class ProductsContainerComponent implements OnInit {

  @Input() currentGroup : ProductGroup;
  
  constructor() {
    
   }

  ngOnInit() {
    
  }

}

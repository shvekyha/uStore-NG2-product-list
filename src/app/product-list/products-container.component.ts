import { ProductGroup } from './product-group';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products-container',
  template: `
  <section class="productsContainer">
    <div class="cbDisplayGrid">
      <label>
        <input #cbDisplayGrid 
           type="checkbox" 
           (change)="toggelCheckbox(cbDisplayGrid)">Display products in grid
      </label>
    </div>
    <app-product *ngFor="let product of currentGroup.productList; let i=index;" [product]="product" [currentView]="currentView" [index]="i+1"></app-product>
  </section>
  `,
  styles: []
})
export class ProductsContainerComponent implements OnInit {

  @Input() currentGroup : ProductGroup;
  public currentView : string;
  
  constructor() {
    this.currentView = 'list';
  }

  toggelCheckbox(element: HTMLInputElement): void {
    element.checked ? this.currentView = 'grid' : this.currentView = 'list';
  }

  ngOnInit() {
    
  }

}

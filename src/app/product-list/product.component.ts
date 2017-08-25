import { Router } from '@angular/router';
import { Product } from './product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
    <app-product-in-list *ngIf="currentView === 'list'" 
                         [product]="product" 
                         (placeAnOrderClicked)="onClick()"></app-product-in-list>
    <app-product-in-grid *ngIf="currentView === 'grid'" 
                         [product]="product" 
                         (placeAnOrderClicked)="onClick()"></app-product-in-grid>
  `,
  styles: []
})
export class ProductComponent implements OnInit {

  @Input() product : Product;
  @Input() currentView : string;

  public router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  onClick(){
    this.router.navigateByUrl('productDetails');
  }

  ngOnInit() {
    //console.log('ngOnInit ProductComponent product: '+this.product.name);
  }

}

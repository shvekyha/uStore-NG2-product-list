import { ProductService } from './product.service';
import { ProductGroup } from './product-group';
import { Product } from './product';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  template: `
    <section class="innerSection">
      <h1 *ngIf='currentProduct'>Here are the details for product:</h1><h2>{{currentProduct.name}}</h2>
      <div class="back">
        <button (click)="onClick()">< Back</button>
      </div>
    </section>
  `,
  styles: []
})
export class ProductDetailsComponent implements OnInit {

  public currentProduct: Product;
  
  public service: ProductService;
  public router: Router;
  public activatedRoute : ActivatedRoute;
  constructor(service: ProductService, router: Router, activatedRoute: ActivatedRoute) {
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.service = service;
  }

  onClick(){
    let group : ProductGroup = this.service.getGroupByProductID(this.currentProduct.id);
    this.router.navigateByUrl('productList/'+ group.id);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let id = +params['productID'];  // (+) converts string 'productID' to a number
      
      this.currentProduct = this.service.getProduct(id);
   });
    
  }

}

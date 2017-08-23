import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  template: `
    <section class="innerSection">
      product-details Works!
      <div class="back">
        <button (click)="onClick()">< Back</button>
      </div>
    </section>
  `,
  styles: []
})
export class ProductDetailsComponent implements OnInit {

  public router: Router;
  constructor(router: Router) {
    this.router = router;
  }

  onClick(){
    this.router.navigateByUrl('productList');
  }

  ngOnInit() {
  }

}

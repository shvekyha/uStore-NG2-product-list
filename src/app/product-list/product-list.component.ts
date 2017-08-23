import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product-list',
  template: `
      <app-main></app-main>
      <!-- <app-footer></app-footer> -->
  `,
  styles: []
})
export class ProductListComponent implements OnInit {

  public route: ActivatedRoute;
  constructor(route: ActivatedRoute) {
    this.route = route;
  }

  ngOnInit() {
  }

}

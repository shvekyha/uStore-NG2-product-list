import { ProductGroupService } from './product-group.service';
import { ProductGroup } from './product-group';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product-list',
  template: `
      <app-main [groupIdInRoute]='groupIdInRoute'></app-main>
      <!-- <app-footer></app-footer> -->
  `,
  styles: []
})
export class ProductListComponent implements OnInit {

  public service: ProductGroupService;
  public activatedRoute: ActivatedRoute;
  public groupIdInRoute : number;
  constructor(service: ProductGroupService, activatedRoute: ActivatedRoute) {
    this.activatedRoute = activatedRoute;
    this.service = service;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.groupIdInRoute = +params['groupID'];  // (+) converts string 'groupID' to a number
    });
  }


}

import { ProductGroup } from './productGroup';
import { Component, OnInit } from '@angular/core';
import { ProductGroupService } from "./product-group.service";

@Component({
  selector: 'app-main',
  template: `
      <app-group-list [productGroupList]="productGroupList.productGroupList" 
                      (groupClicked)="currentGroup = $event">
      </app-group-list>
      <section class="productsSection innerSection">
        <app-group-title *ngIf="currentGroup" [currentGroup]="currentGroup"></app-group-title>
        <app-products-container *ngIf="currentGroup" [currentGroup]="currentGroup"></app-products-container>
      </section>
  `,
  styles: []
})
export class MainComponent implements OnInit {

  public productGroupList : ProductGroupService;
  private _currentGroup : ProductGroup;

  constructor(productGroupList : ProductGroupService) { 
    this.productGroupList = productGroupList;
  }

  set currentGroup(group : ProductGroup){
    this._currentGroup = group;
  }

  get currentGroup() : ProductGroup{
    return this._currentGroup;
  }

  ngOnInit() {
  }

}

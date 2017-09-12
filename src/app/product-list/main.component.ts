import { ActivatedRoute } from '@angular/router';
import { ProductGroup } from './product-group';
import { Component, OnInit, Input } from '@angular/core';
import { ProductGroupService } from "./product-group.service";

@Component({
  selector: 'app-main',
  template: `
      <app-group-list [productGroupList]="service.productGroupList" [listStr]="service.listStr"
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

  public service : ProductGroupService;
  public activatedRoute : ActivatedRoute;
  private _currentGroup : ProductGroup;
  @Input() groupIdInRoute: number;

  constructor(service : ProductGroupService, activatedRoute: ActivatedRoute) { 
    this.service = service;
    this.activatedRoute = activatedRoute;
  }

  set currentGroup(group : ProductGroup){
    this._currentGroup = group;
  }

  get currentGroup() : ProductGroup{
    return this._currentGroup;
  }

  ngOnInit() {
    if (this.groupIdInRoute){
      this._currentGroup = this.service.getGroup(this.groupIdInRoute);
    }
    console.log('service.listStr: '+this.service.listStr);
  }

}

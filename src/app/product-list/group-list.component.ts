import { ProductGroup } from './product-group';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-group-list',
  template: `
    <section class="groupListSection innerSection">
      <dd class="groupList"> 
        <dl class="group" *ngFor="let group of productGroupList" (click)="groupClicked.emit(group)">{{group.name}}</dl>
      </dd>
      {{listStr}}
    </section>
  `,
  styles: []
})
export class GroupListComponent implements OnInit{

  @Input() productGroupList : ProductGroup[];

  @Input() listStr : string;

  @Output() groupClicked = new EventEmitter<ProductGroup>();

  ngOnInit(){
    console.log('listStr: '+this.listStr);
  }

}

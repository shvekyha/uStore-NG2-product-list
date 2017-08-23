import { ProductGroup } from './productGroup';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-group-title',
  template: `
  <section class="groupTitle">
    <h2 class="groupName">{{currentGroup.name}}</h2>
    <h3 class="groupDescription">{{currentGroup.description}}</h3>
  </section>
  `,
  styles: []
})
export class GroupTitleComponent implements OnInit {

  @Input() currentGroup : ProductGroup;

  constructor() { }

  ngOnInit() {
  }

}

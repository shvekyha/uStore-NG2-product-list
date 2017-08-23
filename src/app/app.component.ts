import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <section class="mainPageArea">
      <app-header></app-header>
      <section class="main">
        <!-- <app-product-list></app-product-list> -->
        <router-outlet></router-outlet>
      </section>
    </section>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}

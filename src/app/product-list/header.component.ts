import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="header">
      <section class="logo">
          <img class="logoImage" src="../../assets/XMPie.png" />
          <label class="userGreeting">Hello user.</label>
      </section>
      <section class="navigation">
          <span class="tab homeTab">Home</span>
          <span class="tab myAccountTab">My Account</span>
          <span class="tab cartTab">Cart</span>
      </section>
      <section class="actions">
          <section class="links">
              <a class="link">Drafts</a>
              <a class="link">Help</a>
              <a class="link">Sign Out</a>
          </section>
          <br />
          <section class="culture">
              <select class="flags">
                  <option value="EN-us">EN-US</option>
                  <option value="FR-fr">FR-fr</option>
              </select>
              <select class="currency">
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
              </select>
          </section>
      </section>
    </header>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

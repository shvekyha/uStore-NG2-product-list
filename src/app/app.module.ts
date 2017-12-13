import { ProductListModule } from './product-list/product-list.module';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AppRouter } from './app.routes';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ProductListModule, AppRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor (title: Title, router: Router){
    
    title.setTitle('uStore product list');
    
    //subscribe to events of the router
    router.events.subscribe();//events => console.log(events));
    
  }
}

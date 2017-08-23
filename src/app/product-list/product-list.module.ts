import { ProductGroupService } from './product-group.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { HeaderComponent } from './header.component';
import { MainComponent } from './main.component';
import { GroupTitleComponent } from './group-title.component';
import { ProductsContainerComponent } from './products-container.component';
import { ProductComponent } from './product.component';
import { GroupListComponent } from './group-list.component';
import { ProductDetailsComponent } from './product-details.component';
import { ProductInListComponent } from './product-in-list.component';
import { ProductInGridComponent } from './product-in-grid.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductListComponent, HeaderComponent, MainComponent, GroupTitleComponent, ProductsContainerComponent, ProductComponent, GroupListComponent, ProductDetailsComponent, ProductInListComponent, ProductInGridComponent],
  exports: [ ProductListComponent, HeaderComponent ],
  providers: [ ProductGroupService ]
})
export class ProductListModule { }

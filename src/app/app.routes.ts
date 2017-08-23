import { ProductDetailsComponent } from './product-list/product-details.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
    { path: '', redirectTo: 'productList', pathMatch: 'full' },
    { path: 'productList', component: ProductListComponent },
    { path: 'productDetails', component: ProductDetailsComponent }
];

export const AppRouter = RouterModule.forRoot(routes);
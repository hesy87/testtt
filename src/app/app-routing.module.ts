import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { BasketComponent } from './basket/basket.component';

const routes: Routes = [
  { path: 'product/:id', component: ProductPageComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'products/:category', component: CategoryProductsComponent },
  { path: '', component: LandingPageComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

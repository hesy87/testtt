import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductPageComponent } from './product-page/product-page.component';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { BasketComponent } from './basket/basket.component';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    LandingPageComponent,
    HeaderComponent,
    ProductPageComponent,
    CategoryProductsComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

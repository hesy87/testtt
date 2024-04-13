import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IProduct } from './product.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  products:IProduct[] = []

  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.onFetchProducts()
   }
  
  onFetchProducts() {
    this.http.get('https://fakestoreapi.com/products').subscribe((res:any) => 
      this.products = res
    )
  }
}

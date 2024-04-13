import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.css',
})
export class CategoryProductsComponent {
  cat: string | null = '';
  products = [];
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  ngOnInit() {
      this.route.paramMap.subscribe((params) => {
        this.cat = params.get('category');
        this.fetchProducts();
      }); 
  }

  fetchProducts() {
    this.http
      .get(`https://fakestoreapi.com/products/category/${this.cat}`)
      .subscribe((res: any) => (this.products = res));
  }
}

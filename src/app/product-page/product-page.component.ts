import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../landing-page/product.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent {
  productId: number = 0;
  product!: IProduct;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.productId = this.route.snapshot.params['id'];
    this.onFetch()
  }
  onFetch() {
    this.http
      .get(`https://fakestoreapi.com/products/${this.productId}`)
      .subscribe((res: any) => (this.product = res));
  }
}

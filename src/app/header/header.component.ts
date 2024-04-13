import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() categories = [];

  constructor(private route: Router, private http: HttpClient) {}

  onCategorize(item: string) {
    this.route.navigate([`/products/${item}`]);
  }

  onBasketHandler() {
    this.route.navigate([`/basket`]);
  }
}

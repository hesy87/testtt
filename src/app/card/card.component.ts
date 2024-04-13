import { Component, Input } from '@angular/core';
import { IProduct } from '../landing-page/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() item!: IProduct

  constructor(private router : Router) { }
  
  onClick() {
    this.router.navigate(['/product', this.item.id])
  }
}

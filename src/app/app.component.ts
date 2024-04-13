import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
  
export class AppComponent implements OnInit {
  category = []

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchData()
  }

  private fetchData() {
    this.http.get<string[]>('https://fakestoreapi.com/products/categories')
      .subscribe((res: any) => {
        this.category = res;
    })
  }
  
}

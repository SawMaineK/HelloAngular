import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  products: any = [];
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}

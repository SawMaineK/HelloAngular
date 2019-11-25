import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  products: any[] = [];
  newses: any[] = [];

  constructor(
    private newsService: NewsService,
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(results => {
      this.products = results;
    });

    this.newsService.getNews()
        .subscribe(results => {
          this.newses = results;
        });

    let items = this.cartService.getCartItems();
    console.log(items);
  }

}

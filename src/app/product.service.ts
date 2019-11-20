import { Injectable } from '@angular/core';
import { products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: any = [];
  constructor() {
    this.products = products;
  }

  getProducts(): any[] {
    return this.products;
  }

  getProduct(id: any): any {

    return this.products[id];
  }
}

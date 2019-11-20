import { Injectable } from '@angular/core';
import { products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: any[] = [];
  constructor() {
    this.products = products;
  }

  // Getting all product;
  getProducts(): any[] {
    return this.products;
  }

  // Getting a product by id;
  getProduct(id: any): any {
    return this.products.filter(x=>x.id == id)[0];
  }
}

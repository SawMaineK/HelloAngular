import { Injectable } from '@angular/core';
import { products } from './products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: any[] = [];
  constructor(
    private http: HttpClient
  ) {
    this.products = products;
  }

  // Getting all product;
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>('http://oneclickapp.apitoolz.com/test.json');
  }

  // Getting a product by id;
  getProduct(id: any): Observable<any> {
    return this.http.get<any>('http://oneclickapp.apitoolz.com/test.json/'+id)
  }
}

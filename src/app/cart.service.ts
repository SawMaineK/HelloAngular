import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getCartItems() {
    return [1, 2, 4];
  }
}

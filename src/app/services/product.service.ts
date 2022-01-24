import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return [
      { "productId": 100, "productName": "Lakme", "quantityOnHand": 100, "price": 99 },
      { "productId": 101, "productName": "Aroma", "quantityOnHand": 200, "price": 199 },
      { "productId": 102, "productName": "Mouse", "quantityOnHand": 4300, "price": 1350 },
      { "productId": 103, "productName": "Pendrive", "quantityOnHand": 2300, "price": 1350 },
      { "productId": 104, "productName": "Mobiles", "quantityOnHand": 1300, "price": 5150 },
      { "productId": 105, "productName": "Laptop", "quantityOnHand": 1300, "price": 5150 },
    ]
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient} from '@angular/common/http';

const productURL = "http://localhost:3000/product"

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //DI
  constructor(public httpClient:HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(productURL);
  }
}

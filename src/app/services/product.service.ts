import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//const productURL = "http://localhost:3000/product"
const productURL = "http://localhost:9090/product"


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  //DI
  constructor(public httpClient: HttpClient) { }

  //getting all products
  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(productURL);
  }

  //deleting a single product   -"http://localhost:3000/product/4"
  deleteProduct(productId: number): Observable<Product> {
    return this.httpClient.delete(`${productURL}/${productId}`);
  }

  //getting a single product   -"http://localhost:3000/product/4"
  getProduct(productId: number): Observable<Product> {
    return this.httpClient.get(`${productURL}/${productId}`);
  }

  //saving a single product   -"http://localhost:3000/product"
  saveProduct(product: Product): Observable<Product> {
    return this.httpClient.post(productURL, product);
  }

  //Hands on 
  //updating a single product   -"http://localhost:3000/product"
  updateProduct(product: Product, productId: number):  Observable<Product> {

    return this.httpClient.put(`${productURL}/${productId}`, product);
  }

  
}

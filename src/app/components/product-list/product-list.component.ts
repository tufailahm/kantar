import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  //DI
  constructor(public productService: ProductService) {

  }
  ngOnInit(): void {
    //this.products = this.productService.getProducts();
    this.productService.getProducts().subscribe((data:any[])=> {
      this.products = data;
    })
  }

}

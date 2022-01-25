import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  message !: string
  //DI
  constructor(public productService: ProductService, public router:Router) {

  }
  ngOnInit(): void {
    //this.products = this.productService.getProducts();
    this.refreshProducts();
  }

  //delete product
  deleteProduct(productId:any)
  {
    console.log("Deleting product with product id :"+productId);
    this.productService.deleteProduct(productId).subscribe((data:any)=> {
      this.message = 'Product with product id : '+productId + ' deleted successfully';
      //i will get the data
      this.refreshProducts();
    })
  }


  editProduct(productId:any)
  {
    this.router.navigate(["productAdd", productId]);
  }

  refreshProducts(){
    this.productService.getProducts().subscribe((data:any[])=> {
      this.products = data;
    })
  }

  //navigate to any page programmatically
  navigateToProduct(){
    this.router.navigate(["productAdd"]);
  }

}

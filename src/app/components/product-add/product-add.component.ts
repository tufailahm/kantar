import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productId: number = -1;
  constructor(public productService: ProductService, 
    public router: Router, 
    public activatedRoute: ActivatedRoute) { }
  productForm : FormGroup;

  ngOnInit(): void {
    //code to retrieved the data for the product Id
    this.productId = this.activatedRoute.snapshot.params['productId'];
    //we can hit the product service to get the product details by id 
    this.productForm = new FormGroup({
      productId: new FormControl(this.productId, Validators.required),
      productName: new FormControl('', [Validators.required, Validators.minLength(4)]),
      quantityOnHand: new FormControl('', [Validators.required, Validators.min(2)]),
      price: new FormControl('', [Validators.required, Validators.min(1)]),
  
    })
  
  }

  
  saveProduct() {
    this.productService.saveProduct(this.productForm.value).subscribe((data: any) => {
      this.router.navigate(["productList"])
    })

  }
}

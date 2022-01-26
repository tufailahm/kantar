import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
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
    public activatedRoute: ActivatedRoute,
    public formBuilder:FormBuilder) { }
  productForm: FormGroup;
  product: Product;
  ngOnInit(): void {
    //code to retrieved the data for the product Id
    //snapshot approach has drawback
    //Angular is not going to create the same component again, when u navigate to itself
   // this.productId = this.activatedRoute.snapshot.params['productId'];
   
   this.activatedRoute.params.subscribe((params:Params)=> {
     this.productId = parseInt(params['productId'])

     /*
     if (this.productId == -1) {
      //save
      this.productForm = new FormGroup({
        productId: new FormControl('', Validators.required),
        productName: new FormControl('', [Validators.required, Validators.minLength(4)]),
        quantityOnHand: new FormControl('', [Validators.required, Validators.min(2)]),
        price: new FormControl('', [Validators.required, Validators.min(1)]),
      })
    }
    else {
      //edit
      //we can hit the product service to get the product details by id 
      this.productService.getProduct(this.productId).subscribe((data: any) => {
        this.product = data;
        this.productForm = new FormGroup({
          productId: new FormControl(this.product.productId, Validators.required),
          productName: new FormControl(this.product.productName, [Validators.required, Validators.minLength(4)]),
          quantityOnHand: new FormControl(this.product.quantityOnHand, [Validators.required, Validators.min(2)]),
          price: new FormControl(this.product.price, [Validators.required, Validators.min(1)]),
        })
      })
     
    }
     */
    //by using form builder
    if (this.productId == -1) {
      //save
      this.productForm = this.formBuilder.group({
        productId:['', Validators.required],
        productName: ['', [Validators.required, Validators.minLength(4)]],
        quantityOnHand:['', [Validators.required, Validators.min(2)]],
        price: ['', [Validators.required, Validators.min(1)]],
      })
    }
    else {
      //edit
      //we can hit the product service to get the product details by id 
      this.productService.getProduct(this.productId).subscribe((data: any) => {
        this.product = data;
        this.productForm = this.formBuilder.group({
          productId:[this.product.productId, Validators.required],
          productName: [this.product.productName, [Validators.required, Validators.minLength(4)]],
          quantityOnHand:[this.product.quantityOnHand, [Validators.required, Validators.min(2)]],
          price: [this.product.price, [Validators.required, Validators.min(1)]],
        })
      })
     
    }
   })

    
  }
  saveEditProduct() {
    if(this.productId == -1) {
      //save
      this.productService.saveProduct(this.productForm.value).subscribe((data: any) => {
        this.router.navigate(["productList"])
      })
    }
    else {
      //edit
      this.productService.updateProduct(this.productForm.value,this.productId).subscribe((data: any) => {
        this.router.navigate(["productList"])
      })
    }
   

  }
}

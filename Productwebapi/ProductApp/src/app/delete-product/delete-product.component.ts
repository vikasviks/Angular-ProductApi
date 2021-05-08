import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, pipe } from 'rxjs';

import { AppService } from '../app.service';
import { Product } from '../product';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  productdelete: Product;
  loginForm: FormGroup;
  productitems: Observable<Product[]>;
  showotherfields: boolean = false;
  items: Observable<Product[]>;
  id: number;
  showform: FormGroup;
  product: Product;
  productToDelete : any;

  constructor(private appservice: AppService,private route:ActivatedRoute ) {
    this.loginForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
    }),
      
    this.items = new Observable<Product[]>();
    this.showform = new FormGroup({
      title: new FormControl('', [Validators.required]),
      price: new FormControl('',[Validators.required]),
      quantity: new FormControl([Validators.min(0)]),
      color: new FormControl('', [Validators.required]),
      expiryDate: new FormControl('', [Validators.required]),
      inStock: new FormControl(true, [Validators.required]),
    })

    this.productToDelete = this.route.snapshot.paramMap.get('id');
    this.appservice.getProduct(this.productToDelete).subscribe(
      data => {
        console.log(data);
        this.showform.get('title')?.setValue(data.title);
        this.showform.get('price')?.setValue(data.price);
        this.showform.get('quantity')?.setValue(data.quantity);
        this.showform.get('color')?.setValue(data.color);
        this.showform.get('expiryDate')?.setValue(data.expiryDate);
        this.showform.get('inStock')?.setValue(data.inStock);
      }
    );
  }

  ngOnInit(): void {
    this.items = this.appservice.getProducts();
    
  }

  submit() {
    this.appservice.DeleteRecord(this.productToDelete).subscribe();
    // this.router.navigate(['/Home']);

  }

  reset() {
    this.loginForm.reset();
  }

}

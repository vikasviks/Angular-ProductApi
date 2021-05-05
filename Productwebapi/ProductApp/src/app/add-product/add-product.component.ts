import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { IProduct } from '../IProduct';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addform: FormGroup;
  constructor(private fb: FormBuilder, private myservice:AppService) {
    this.addform = this.fb.group({
      title: ['', Validators.required],
      price: [ [Validators.required,Validators.min(0)]],
      quantity: [ [Validators.required,Validators.min(0)]],
      color: ['', Validators.required],
      expirydate: ['', Validators.required],
      instock: [true, Validators.required]
    });
  }

  ngOnInit(): void {
  }
  submit() {
    let product:IProduct = {...this.addform.value};
    product.id = 0;
    this.myservice.postProduct(product).subscribe();
  }
}

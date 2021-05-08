import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
import { Product } from '../product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  UpdateForm:FormGroup;
  productToUpdate : any;

  constructor(private fb:FormBuilder,private myservice:AppService, private router:Router,private route:ActivatedRoute ) {
    this.UpdateForm= this.fb.group({
      id : [null,[Validators.required,]],
      title : ['',[Validators.required]],
      price : [null,[Validators.required,]],
      quantity : [null,[Validators.required]],
      color : [null,[Validators.required]],
      inStock : [true,[Validators.required]],
      expiryDate: [null,[Validators.required,]],
    })

    this.productToUpdate = this.route.snapshot.paramMap.get('id');
    console.log(this.productToUpdate)
   }

  ngOnInit(): void {
    this.myservice.getProduct(this.productToUpdate).subscribe(
      data => {
        console.log(data);
        this.UpdateForm.get('title')?.setValue(data.title);
        this.UpdateForm.get('price')?.setValue(data.price);
        this.UpdateForm.get('quantity')?.setValue(data.quantity);
        this.UpdateForm.get('color')?.setValue(data.color);
        this.UpdateForm.get('expiryDate')?.setValue(data.expiryDate);
        this.UpdateForm.get('inStock')?.setValue(data.inStock);
      }
    );
  }
  Update(){
    let recordToUpdate:Product={
      ...this.UpdateForm.value
    };
    recordToUpdate.id=parseInt(this.productToUpdate);
        console.log(recordToUpdate);
    this.myservice.updateRecord(recordToUpdate).subscribe();
    this.router.navigate(['/Home']);

    console.log("Record successfully Updated");

  }

}

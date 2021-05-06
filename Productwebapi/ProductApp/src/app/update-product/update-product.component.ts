import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { Product } from '../product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  UpdateForm:FormGroup;
  constructor(private fb:FormBuilder,private myservice:AppService, private router:Router) {
    this.UpdateForm= this.fb.group({
      id : [null,[Validators.required,]],
      title : ['',[Validators.required]],
      Price : [null,[Validators.required,]],
      Quantity : [null,[Validators.required]],
      color : [null,[Validators.required]],
      isInstock : [true,[Validators.required]],
      expiryDate: ['',[Validators.required,]],
      
    })
   }

  ngOnInit(): void {
  }
  
  Update(){
    let recordToUpdate:Product={
      ...this.UpdateForm.value
    };
        console.log(recordToUpdate);
    this.myservice.putProduct(recordToUpdate).subscribe();
    this.router.navigate(['/Home']);
    console.log("Record successfully Updated");

  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { Product } from '../product';

@Component({
  selector: 'app-update-direct',
  templateUrl: './update-direct.component.html',
  styleUrls: ['./update-direct.component.css']
})
export class UpdateDirectComponent implements OnInit {

  productdelete: Product;
  loginForm: FormGroup;
  productitems: Observable<Product[]>;
  items: Observable<Product[]>;
  id: number;
  showform: FormGroup;
  product: Product;
  showotherfields: boolean = false;
  targetId:number;
  
  constructor(private fb:FormBuilder,private myservice:AppService, private router:Router,private route:ActivatedRoute ) {
    this.showform= this.fb.group({
      id : [null,[Validators.required,]],
      title : ['',[Validators.required]],
      price : [null,[Validators.required,]],
      quantity : [null,[Validators.required]],
      color : ['',[Validators.required]],
      expiryDate: ['',[Validators.required,]],
      inStock : [true,[Validators.required]],       
    })
   }

  ngOnInit(): void {
    
  }

  Update(){
    let recordToUpdate:Product={
      ...this.showform.value
    };
    recordToUpdate.id=this.targetId;
        console.log(recordToUpdate);
    this.myservice.updateRecord(recordToUpdate).subscribe();
    this.router.navigate(['/Home']);

    console.log("Record successfully Updated");

  }
  
  showfullform(){
    this.showotherfields=true;
    console.log(this.targetId)
    this.myservice.getProduct(this.targetId).subscribe(
      data => {
        // console.log(data);
        this.showform.get('title')?.setValue(data.title);
        this.showform.get('price')?.setValue(data.price);
        this.showform.get('quantity')?.setValue(data.quantity);
        this.showform.get('color')?.setValue(data.color);
        this.showform.get('expiryDate')?.setValue(data.expiryDate);
        this.showform.get('inStock')?.setValue(data.inStock);
      }
    );
  }

  reset() {
    this.loginForm.reset();
  }
}

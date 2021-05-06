import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { Product } from '../product';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  DeleteForm:FormGroup;
  constructor(private fb:FormBuilder,private myservice:AppService, private router:Router) {
    this.DeleteForm= this.fb.group({
      id : [null,[Validators.required,]],

   });
  }

  ngOnInit(): void {
  }

  Delete(){
    let recordToUpdate={
      ...this.DeleteForm.value
    };
    console.log(recordToUpdate)
    
    console.log(recordToUpdate.id);
    this.myservice.DeleteRecord(recordToUpdate.id).subscribe();
    this.router.navigate(['/Home']);
    console.log("Record successfully Updated");

  }

}

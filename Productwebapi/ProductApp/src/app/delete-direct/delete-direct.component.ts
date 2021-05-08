import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { Product } from '../product';

@Component({
  selector: 'app-delete-direct',
  templateUrl: './delete-direct.component.html',
  styleUrls: ['./delete-direct.component.css']
})
export class DeleteDirectComponent implements OnInit {

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
    console.log("Record successfully deleted");

  }

}

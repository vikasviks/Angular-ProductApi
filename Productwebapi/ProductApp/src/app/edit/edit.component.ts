import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { Product } from '../product';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

 product$:Observable<Product[]>;
 products: Product;
 TargetId:string;
  constructor(private appservice:AppService, private route:ActivatedRoute){
    this.product$=new Observable();
  }

  ngOnInit(): void {
    this.TargetId=this.route.snapshot.paramMap.get('id');
     this.appservice.getProduct(parseInt(this.TargetId)).subscribe(
        data =>{ this.products = data;}
        
      );
  }
}

import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AppService } from '../app.service';
import { Product } from '../product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  task: any="";
  product$:Observable<Product[]>;
  constructor(private appservice:AppService){
    this.product$=new Observable();
  }

  ngOnInit(): void {
    this.product$=this.appservice.getProducts();
  }
  
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from './app.service';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ProductAppApi';
  products: Product[]=[];
  productssubscription: Subscription;
  constructor(private appservice: AppService){
    this.productssubscription= new Subscription();
  }


  ngOnInit(){
    this.productssubscription= this.appservice.getProducts().subscribe(
      data=>{this.products= data},
      error=>{
        console.log(error);
      },
      ()=>console.log('complete')
      
    )
  }

  ngOnDestroy(){
    if(this.productssubscription){
      this.productssubscription.unsubscribe();
    }
  }
}

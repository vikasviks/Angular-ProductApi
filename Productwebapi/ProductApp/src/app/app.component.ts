import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppService } from './app.service';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  @Input() myProduct$:Observable<Product[]>;
  
  title = 'apiconsumedemo';
  products: Product[]=[];
  productssubscription: Subscription;
  constructor(private appservice: AppService,private cd:ChangeDetectorRef){
    this.productssubscription= new Subscription();
    this.myProduct$= new Observable();
  }

  
  ngOnInit(){
    this.productssubscription= this.appservice.getProducts().subscribe(
      data=>{this.products= data},
      error=>{
        console.log(error);
      },
      ()=>console.log('complete')
      
    )

    this.productssubscription=this.myProduct$.subscribe(
      data=>{
        this.products=data;
        this.cd.markForCheck();
        console.log(this.products);      }
    ),
    error=>{
      console.log(error);
    },
    ()=>console.log('complete')

  }

  ngOnDestroy(){
    if(this.productssubscription){
      this.productssubscription.unsubscribe();
    }
  }
}

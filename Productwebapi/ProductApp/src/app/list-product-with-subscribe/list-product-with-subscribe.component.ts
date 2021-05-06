import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { Product } from '../product';

@Component({
  selector: 'app-list-product-with-subscribe',
  templateUrl: './list-product-with-subscribe.component.html',
  styleUrls: ['./list-product-with-subscribe.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ListProductWithSubscribeComponent implements OnInit {
  title = 'ProductAppapi';
  @Input() myProduct$:Observable<Product[]>;
  products: Product[]=[];
  productssubscription: Subscription;
  
  constructor(private cd:ChangeDetectorRef){
    this.productssubscription= new Subscription()
    this.myProduct$= new Observable();
  }

 ngOnInit(){
    this.productssubscription=this.myProduct$.subscribe(
      data=>{
        this.products=data;
        this.cd.markForCheck();
        console.log(this.products);      }
    ),
    error=>{
      console.log(error);
    }
    // ()=>console.log('complete')

  }
  ngOnChanges(): void {
    this.productssubscription= this.myProduct$.subscribe(
      data=>{this.products= data,
      this.cd.markForCheck();
    },
      error=>{
        console.log(error);
      },

      ()=>console.log('complete')
      
    )
  }


}

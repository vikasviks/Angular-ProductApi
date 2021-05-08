import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../product';

@Component({
  selector: 'app-using-mattable',
  templateUrl: './using-mattable.component.html',
  styleUrls: ['./using-mattable.component.css']
})
export class UsingMattableComponent implements OnInit {

  @Input() myProduct$:Observable<Product[]>;
  products: Product[]=[];
  productssubscription: Subscription;
  showTable: boolean = true;
  
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
    },
    ()=>console.log('complete')

  }
  ngOnChanges(): void {
    this.productssubscription= this.myProduct$.subscribe(
      data=>{this.products= data,
      this.cd.markForCheck();
    },
      error=>{
        console.log(error);
      },
      
    )
    
  }

   displayedColumns: string[] = ['id', 'title', 'price', 'quantity','color', 'expiryDate', 'inStock'];
  

}

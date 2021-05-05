import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../IProduct';

@Component({
  selector: 'app-list-product-with-subscribe',
  templateUrl: './list-product-with-subscribe.component.html',
  styleUrls: ['./list-product-with-subscribe.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListProductWithSubscribeComponent implements OnInit {
  @Input() myproducts$:Observable<IProduct[]>;
  myproducts: IProduct[];
  constructor(private cd:ChangeDetectorRef) {
      this.myproducts = [];    
   }

  ngOnInit(): void {
    this.myproducts$.subscribe(
      data=> {
        this.myproducts = data
        this.cd.markForCheck();
        }
    );
  }
}
import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { observable, Observable, Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { Product } from '../product';

@Component({
  selector: 'app-list-product-with-async',
  templateUrl: './list-product-with-async.component.html',
  styleUrls: ['./list-product-with-async.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ListProductWithAsyncComponent implements OnInit {
@Input() myProduct$: Observable<Product[]>;
constructor(){

}
ngOnInit():void{

}

}



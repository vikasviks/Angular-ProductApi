import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../IProduct';

@Component({
  selector: 'app-list-product-with-async',
  templateUrl: './list-product-with-async.component.html',
  styleUrls: ['./list-product-with-async.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListProductWithAsyncComponent implements OnInit {
  @Input() myproducts$: Observable<IProduct[]>;
  constructor() { }

  ngOnInit(): void {
  }
}

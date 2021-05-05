import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { IProduct } from '../IProduct';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  products$: Observable<IProduct[]>
  constructor(private myservice: AppService) { 
    this.products$ = new Observable<IProduct[]>();
  }
  ngOnInit(): void {
   this.products$ = this.myservice.getProducts(); 
  }
}

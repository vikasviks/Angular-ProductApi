import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import {Observable,  throwError} from 'rxjs';
import {tap, catchError} from 'rxjs/operators'
import {environment} from '../environments/environment'
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }
  private myerrorhandler(err: any){
    console.log(err);
    return throwError(err);
  }
  getProducts(): Observable<Product[]>{
    const apiurl = environment.apibaseurl + 'Products';
    const headers = {'content-type':'application/json'};
    return this.http.get<Product[]>(apiurl,{'headers':headers}).pipe(
      //tap(data=>console.log(data)), // only to see data in see console what is coming
      catchError(
        //error => {return throwError(error);}
        error => this.myerrorhandler(error)
      )
    );
  }
  getProduct(id : number): Observable<Product>{
    const apiurl = environment.apibaseurl + 'Products/' + id;
    const headers = {'content-type':'application/json'};
    return this.http.get<Product>(apiurl,{'headers':headers}).pipe(
      catchError( error => this.myerrorhandler(error) )
    );
  }

  //for adding a product
  postProduct(product: Product): Observable<Product> {
    Object.defineProperty(product, 'id',{'enumerable':false}); // so that id won't go to api
    const apiurl = environment.apibaseurl + 'Products';
    const headers = {'accept':'application/json','content-type':'application/json'};
    return this.http.post<Product>(apiurl, product, {'headers':headers}).pipe(
      catchError( error => this.myerrorhandler(error) )
    );
  }

  //for Edit/Update product
  putProduct(product: Product): Observable<Product> {
    const apiurl = environment.apibaseurl + 'Products/'+ product.id;
    const headers = {'accept':'application/json','content-type':'application/json'};
    return this.http.put<Product>(apiurl, product,{'headers':headers}).pipe(
      catchError( error => this.myerrorhandler(error) )
    );
  }


//for delete a product
  DeleteRecord(task:number):Observable<any>{
    const apiurl= environment.apibaseurl +'Products/'+ task;
    const headers={'content-type': 'application/json'};
    const dataToAdd=JSON.stringify(task);
    console.log(dataToAdd);
    return this.http.delete<any>(apiurl,{'headers':headers}).pipe(
      tap((task:any)=>{
        console.log(task)
      }),
      // catchError(this.handleError)
      )
    }
}

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

  getProducts():Observable<Product[]>{

    const apiurl= environment.apibaseurl + "Products/";
    const headers={'content-type': 'application/json'};

    return this.http.get<Product[]>(apiurl,{'headers': headers}).pipe(
      tap(data=>{}),
      catchError(error=>{
        return throwError(error)
      })
    );
  }

  addProductRecord(task:Product):Observable<any>{
    const apiurl= environment.apibaseurl + "Products/";
    const headers={'content-type': 'application/json'};
    Object.defineProperty(task,'id',{'enumerable':false});
    const dataToAdd=JSON.stringify(task);
    console.log(dataToAdd);
    return this.http.post<any>(apiurl, dataToAdd,{'headers':headers}).pipe(
      tap((task:any)=>{
        console.log(task)
      }),
      catchError(this.handleError)
    )
  }

  getProduct(id:number): Observable<Product>{
    const apiurl= environment.apibaseurl + "Products/" +id;
    const headers={'content-type': 'application/json'};
    return this.http.get<Product>(apiurl,{'headers': headers}).pipe(
      catchError(this.handleError)
      )
  }


  updateRecord(task:Product):Observable<any>{
    const apiurl= environment.apibaseurl + "Products/"+task.id;
    const headers={'content-type': 'application/json'};
    const dataToAdd=JSON.stringify(task);
    console.log(dataToAdd);
    return this.http.put<any>(apiurl, dataToAdd,{'headers':headers}).pipe(
      tap((task:any)=>{
        console.log(task)
      }),
      catchError(this.handleError)
    )
  }

  DeleteRecord(task:number):Observable<any>{
    const apiurl= environment.apibaseurl + "Products/"+task;
    const headers={'content-type': 'application/json'};
    const dataToAdd=JSON.stringify(task);
    console.log(dataToAdd);
    return this.http.delete<any>(apiurl,{'headers':headers}).pipe(
      tap((task:any)=>{
        console.log(task)
      }),
      catchError(this.handleError)
    )
  }

  private handleError(error:any){
    console.error(error);
    return throwError(error);
  }
}

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe, throwError } from 'rxjs';
import { customerInterface } from './Customer';
import {catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PulldataService {

  constructor(private _http:HttpClient) {}
private _url ="https://fakestoreapi.com/products";
getCustomer(): Observable<customerInterface[]>{
  return this._http.get<customerInterface[]>(this._url)
  .pipe(catchError(this.errorHandler));
  
}
errorHandler( error: HttpErrorResponse){
  return throwError (error.message || "Server Error")
}

   
}

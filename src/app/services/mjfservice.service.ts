import { Injectable } from '@angular/core';
import {catchError} from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, Subject, throwError } from 'rxjs';

import { OrderDetail } from 'src/app/models/OrderDetail';
import {Updateorderstatus} from 'src/app/models/Updateorderstatus'
import {Product} from 'src/app/models/Products';

@Injectable({
  providedIn: 'root'
})
export class MjfserviceService {

  constructor(private _http:HttpClient) { }


  private handleError(errorResponse:HttpErrorResponse){
    return throwError(errorResponse.message);

  }
  getOrders():Observable<OrderDetail[]>
  {

     return this._http.get<OrderDetail[]>("http://eservices.mirajfoods.ca/api/adminorder")
    .pipe(
      catchError(this.handleError)
  );

  }

  getOrderDetail(id:number):Observable<OrderDetail>
  {

     return this._http.get<OrderDetail>("http://eservices.mirajfoods.ca/api/orderbyid?OrderID=" + id)
    .pipe(
      catchError(this.handleError)
  );
 }


 UpdateOrderStatus (OrderStatus:Updateorderstatus) :Observable<boolean>  {

  return this._http.post<boolean>("http://eservices.mirajfoods.ca/api/ChangeOrderStatus",OrderStatus)
  .pipe(
    catchError(this.handleError)
);
}

getItems():Observable<Product[]>
{

   return this._http.get<Product[]>("http://eservices.mirajfoods.ca/api/item")
  .pipe(
    catchError(this.handleError)
);
}

GetProductsbyid(id:number):Observable<Product>{

  return this._http.get<Product>("http://eservices.mirajfoods.ca/api/item" + "?iid=" + id)
  .pipe(
    catchError(this.handleError)
);
  }



}

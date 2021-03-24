import { Injectable } from '@angular/core';
import {catchError} from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, Subject, throwError } from 'rxjs';

import { OrderDetail } from 'src/app/models/OrderDetail';
import {Updateorderstatus} from 'src/app/models/Updateorderstatus'
import {Product} from 'src/app/models/Products';
import { Catalog } from '../models/catalog';
import { Category } from '../models/Category';
import { ProductViewModel } from '../models/productViewModel';

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

getItems():Observable<ProductViewModel[]>
{

   return this._http.get<ProductViewModel[]>("http://eservices.mirajfoods.ca/api/AdminItem")
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



  getCatalog():Observable<Catalog[]>
{
   return this._http.get<Catalog[]>("http://eservices.mirajfoods.ca/api/AdminCatalog")
  .pipe(
    catchError(this.handleError)
);
}

getSubCategory():Observable<Category[]>
{
   return this._http.get<Category[]>("http://eservices.mirajfoods.ca/api/AdminCategory")
  .pipe(
    catchError(this.handleError)
);
}



AddItem(formdata:FormData):Observable<boolean>{
  return this._http.post<boolean>("http://eservices.mirajfoods.ca/api/AdminItem/AddItem",formdata);
}



AddCatalog(model:Catalog):Observable<boolean>{
  return this._http.post<boolean>("http://eservices.mirajfoods.ca/api/AdminCatalog/AddCatalog",model);
}

AddSubCategory(model:Category):Observable<boolean>{
  return this._http.post<boolean>("http://eservices.mirajfoods.ca/api/AdminCategory/AddCategory",model);
}

}

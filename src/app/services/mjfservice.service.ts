import { Injectable } from '@angular/core';
import {catchError, map} from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, Subject, throwError } from 'rxjs';
import {ajax} from 'rxjs/ajax';

import { OrderDetail } from 'src/app/models/OrderDetail';
import {Updateorderstatus} from 'src/app/models/Updateorderstatus'
import {Product} from 'src/app/models/Products';
import { Catalog } from '../models/catalog';
import { Category } from '../models/Category';
import { ProductViewModel } from '../models/productViewModel';
import { itemspecification } from '../models/itemspecification';
import {Customer} from '../models/customer';
import{itemimage } from '../models/itemimage';


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



AddItem(formdata:FormData):Observable<string>{
  return this._http.post<string>("http://eservices.mirajfoods.ca/api/AdminItem/AddItem",formdata);
}

UpdateItem(formdata:FormData):Observable<string>{
  return this._http.post<string>("http://eservices.mirajfoods.ca/api/AdminItemUpdate/UpdateItem",formdata)
  .pipe(
    catchError(this.handleError)
);
}




AddCatalog(model:Catalog):Observable<boolean>{
  return this._http.post<boolean>("http://eservices.mirajfoods.ca/api/AdminCatalog/AddCatalog",model);
}

AddSubCategory(model:Category):Observable<boolean>{
  return this._http.post<boolean>("http://eservices.mirajfoods.ca/api/AdminCategory/AddCategory",model);
}




getspecification(itemid:number):Observable<itemspecification[]>{

  return this._http.get<itemspecification[]>("http://eservices.mirajfoods.ca/api/specification/GetItemSpecification" + "?item_id=" + itemid)
  .pipe(
    catchError(this.handleError)
);
  }

  AddSpecification(model:itemspecification):Observable<string>{

    return this._http.post<string>("http://eservices.mirajfoods.ca/api/specification/AddSpecification",model);
  }

  EditSpecification(model:itemspecification):Observable<string>{

    return this._http.post<string>("http://eservices.mirajfoods.ca/api/specification/EditSpecification",model);
  }
  DeleteSpecification(id:number):Observable<boolean>{

    return this._http.get<boolean>("http://eservices.mirajfoods.ca/api/specification/DeleteSpecification" + "?id=" + id)

  }



  getCustomer():Observable<Customer[]>
{
   return this._http.get<Customer[]>("http://eservices.mirajfoods.ca/api/Customer/getcustomer")
  .pipe(
    catchError(this.handleError)
);
}

WaviedShippingCharges(model:Customer):Observable<string>{
  return this._http.post<string>("http://eservices.mirajfoods.ca/api/Customer/WaviedShippingCharges",model);
}


getImagelist(itemid:number):Observable<itemimage[]>{

  return this._http.get<itemimage[]>("http://eservices.mirajfoods.ca/api/AdminItemGallery/GetImageList?iID=" + itemid  );


}

UploadImage(formdata:FormData):Observable<itemimage>{

    return this._http.post<itemimage>("http://eservices.mirajfoods.ca/api/AdminItemGallery/UploadImage",formdata);


}

deleteImage(id:number):Observable<boolean>{

  return this._http.get<boolean>("http://eservices.mirajfoods.ca/api/AdminItemGallery/DeleteImage?id=" + id  );


}

}


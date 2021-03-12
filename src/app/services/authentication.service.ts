import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _http:HttpClient) { }

  private handleError(errorResponse:HttpErrorResponse){
    return throwError(errorResponse.message);

  }

  public isAuthenticated(): boolean {
    return this.getToken() !== null;

  }

  storeToken(token: string) {
    localStorage.setItem("Admintoken", token);
  }

  getToken() {

     return localStorage.getItem("Admintoken"); // if empty return null
  }
  removeToken() {
     localStorage.removeItem("Admintoken");
  }





}

import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import {NgForm} from '@angular/forms';

import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,
              private authService: AuthenticationService) { }

  ngOnInit(): void {
  }


  login(form:NgForm){
    if (form.value.email=="miraj" &&  form.value.password=="miraj123@@")
       {
        this.authService.removeToken();
        this.authService.storeToken("miraj");
        this.router.navigate(['dashboard']);
       }
   else{
     alert ("Invalid UserName / Password");
   }


  }

}

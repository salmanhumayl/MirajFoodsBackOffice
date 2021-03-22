import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MjfserviceService } from 'src/app/services/mjfservice.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  isValidFormSubmitted:boolean=false;

  constructor(private _MJFService:MjfserviceService,
              private _router:Router) { }

  ngOnInit(): void {
  }

  onFormSubmit(){

  }

  cancel(){
    this._router.navigate(['/items']);
  }

}

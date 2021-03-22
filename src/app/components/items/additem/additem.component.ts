import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Products';
import { MjfserviceService } from 'src/app/services/mjfservice.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  isValidFormSubmitted:boolean=false;
  Items:Product=new Product();

  constructor(private _MJFService:MjfserviceService,
              private _router:Router) { }

  ngOnInit(): void {
  }

  onFormSubmit(){
    alert(this.Items.item_description);
  }

  cancel(){
    this._router.navigate(['/items']);
  }

}

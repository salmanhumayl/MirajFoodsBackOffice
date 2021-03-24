import { Component, OnInit } from '@angular/core';
import { Catalog } from 'src/app/models/catalog';
import { Category } from 'src/app/models/Category';
import { MjfserviceService } from 'src/app/services/mjfservice.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
 Category:Category=new Category();
 catalog:Catalog[]=[]

  constructor(private _MJFService:MjfserviceService) { }

  ngOnInit(): void {
    this.getCatalog();
  }

  onFormSubmit(){

  }

  cancel(){

  }


  getCatalog()
  {
    this._MJFService.getCatalog().subscribe(
      {
        next:(catalog)=>{
           this.catalog=catalog;
        },
        complete:()=>{

         // this.loading=false;
        }
      }

    );
  }

}

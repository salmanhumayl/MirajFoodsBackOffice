import { Component, OnInit } from '@angular/core';
import { MjfserviceService } from 'src/app/services/mjfservice.service';
import {Catalog} from 'src/app/models/catalog';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private _MJFService:MjfserviceService) { }

  catalog:Catalog[]=[]
  loading:boolean=false;
  ngOnInit(): void {
    this.getCatalog();
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

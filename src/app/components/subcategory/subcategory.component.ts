import { Component, OnInit } from '@angular/core';
import { MjfserviceService } from 'src/app/services/mjfservice.service';
import {Category} from 'src/app/models/Category';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {
  subcategory:Category[]=[]
  loading:boolean=false;

  constructor(private _MJFService:MjfserviceService) { }

  ngOnInit(): void {
    this.getSubCategory()

  }

  getSubCategory()
  {
    this._MJFService.getSubCategory().subscribe(
      {
        next:(response)=>{
           this.subcategory=response;
        },
        complete:()=>{
          console.log(this.subcategory);
         // this.loading=false;
        }
      }

    );
  }
}

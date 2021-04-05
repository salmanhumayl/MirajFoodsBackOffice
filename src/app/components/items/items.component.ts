
import { Component, OnInit } from '@angular/core';
import { ProductViewModel } from 'src/app/models/productViewModel';
import { MjfserviceService } from 'src/app/services/mjfservice.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  productitems:ProductViewModel[]=[]; //blank array to start with
  loading:boolean=true;
  searchterm:string;

  constructor(private _MJFService:MjfserviceService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems()
  {
    this._MJFService.getItems().subscribe(
      {
        next:(products)=>{
           this.productitems=products
        },
        complete:()=>{
          this.loading=false;
        }
      }

    );
  }

}

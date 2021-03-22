import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Products';
import { MjfserviceService } from 'src/app/services/mjfservice.service';

@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component.css']
})
export class EdititemComponent implements OnInit {
  isValidFormSubmitted:boolean=false;
  inItems:Product;
  id:number=0;
  ShowonLandingPage:boolean;

  constructor(private _MJFService:MjfserviceService,
              private _avRoute:ActivatedRoute,
              private _router:Router) {
                    if (this._avRoute.snapshot.params["id"]){
                      this.id=this._avRoute.snapshot.params["id"]
                    }

               }

  ngOnInit(): void {
    if (this.id> 0 ){
      this.GetProductsbyid();
    }
  }

  GetProductsbyid()
  {
         this._MJFService.GetProductsbyid(this.id).subscribe(

        (data)=>{
          this.inItems=data;


      },
      error => {
                 alert(error);

               }
      );
      //this.productitems=this._itemService.getProducts();
      //this.inItems=this.productitems.find(p=>p.item_id==this.id);

  }

  onFormSubmit(){

  }

  cancel(){
    this._router.navigate(['/items']);
  }

}

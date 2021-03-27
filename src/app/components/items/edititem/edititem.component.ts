import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  item_primary_thumb:File;
  item_secondary_thumb:File;
  ButtonText="Update"

  @ViewChild('imgSec') SecondaryImg:ElementRef;
  @ViewChild('imgPrimary') PrimaryImg:ElementRef;


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
          console.log(this.inItems);

      },
      error => {
                 alert(error);

               }
      );


  }

  onFormSubmit(){

    this.ButtonText="Please wait....";
    const formdata=new FormData();

    formdata.append("model",JSON.stringify(this.inItems));
    formdata.append("PrimaryImg",this.item_primary_thumb);
    formdata.append("SecondaryImg",this.item_secondary_thumb);

    this._MJFService.UpdateItem(formdata).subscribe(

      (response)=>{
          if (response=="")  {
           // alert(response)
            this._router.navigate(['/items']);
          }
          else
          {
            alert(response)
            this._router.navigate(['/items']);
          }

        },
        error => {
          alert(error);

        }


    );


  }


  cancel(){
    this._router.navigate(['/items']);
  }

  deleteimage(itemid:number,type:string){
    if (type=="P"){
      this.PrimaryImg.nativeElement.src="";
    }
    if (type=="S"){
      this.SecondaryImg.nativeElement.src="";
    }

   /*  this._MJFService.deleteimage(itemid,type).subscribe(

      (data)=>{



    },
    error => {
               alert(error);

             }
    ); */
  }

  PrimaryImage(file:FileList)
  {
    this.item_primary_thumb=file.item(0);

  }

  SecondaryImage(file:FileList)
  {
    this.item_secondary_thumb=file.item(0);
  }

}

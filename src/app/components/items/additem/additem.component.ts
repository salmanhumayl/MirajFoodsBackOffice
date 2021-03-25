import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Catalog } from 'src/app/models/catalog';
import { Category } from 'src/app/models/Category';
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
  catalog:Catalog[]=[]
  subcategory:Category[]=[]
  CatalogID:number;
  item_primary_thumb:File;
  item_secondary_thumb:File;
  constructor(private _MJFService:MjfserviceService,
              private _router:Router) { }

  ngOnInit(): void {
    this.getCatalog();
  }

  onFormSubmit(){

    const formdata=new FormData();
    /* formdata.append("item_id",this.Items.item_id.toString());
    formdata.append("category_ID",this.Items.Category_ID.toString());
    formdata.append("item_description",this.Items.item_description);
    formdata.append("item_size",this.Items.item_size);
    formdata.append("item_uom",this.Items.item_uom);
    formdata.append("item_price",this.Items.item_price.toString());
    formdata.append("ApplyTax",this.Items.ApplyTax.toString());
    formdata.append("ShowonlandingPage",this.Items.ShowonlandingPage.toString());
 */
    formdata.append("model",JSON.stringify(this.Items));
    formdata.append("PrimaryImg",this.item_primary_thumb);
    formdata.append("SecondaryImg",this.item_secondary_thumb);

    this._MJFService.AddItem(formdata).subscribe(

        (response)=>{
          if (response==true)  {
           // alert(response)
            this._router.navigate(['/items']);
          }
          else
          {
           // alert("Error")
            this._router.navigate(['/items']);
          }

        }


    );


  }

  cancel(){
    this._router.navigate(['/items']);
  }


  fillSubCategory(){
    this.getSubCategory();
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

  getSubCategory()
  {
    this._MJFService.getSubCategory().subscribe(
      {
        next:(response)=>{
           this.subcategory=response.filter(x=> x.Catalog_ID==this.CatalogID);
        },
        complete:()=>{
         // this.loading=false;
        }
      }

    );
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

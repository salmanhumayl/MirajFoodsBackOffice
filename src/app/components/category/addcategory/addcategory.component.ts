import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Catalog } from 'src/app/models/catalog';
import { MjfserviceService } from 'src/app/services/mjfservice.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
  Catalog:Catalog=new Catalog();

  constructor(private _MJFService:MjfserviceService,
              private _router:Router) { }

  ngOnInit(): void {
  }

 onFormSubmit(){

  this._MJFService.AddCatalog(this.Catalog).subscribe(

    (response)=>{
        if (response==true)
        {
          this._router.navigate(['/category']);
        }
        else
        {
          alert("Error");
        }

    }


);


}


 cancel(){
  this._router.navigate(['/category']);
}

}

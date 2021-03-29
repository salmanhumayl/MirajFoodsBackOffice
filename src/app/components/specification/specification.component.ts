import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MjfserviceService } from 'src/app/services/mjfservice.service';

import {itemspecification} from 'src/app/models/itemspecification';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.css']
})
export class SpecificationComponent implements OnInit {
  loading:boolean=false;
  itemid:number;
  itemspecification:itemspecification[]=[]
  model:itemspecification=new itemspecification();

  constructor(private _MJFService:MjfserviceService,
              private _avRoute:ActivatedRoute,
              private _router:Router) {

                if (this._avRoute.snapshot.params["itemid"]){
                  this.itemid=this._avRoute.snapshot.params["itemid"]
                }
              }

  ngOnInit(): void {
    this.getspecification();
  }


  onFormSubmit(form:NgForm){


    this.model.item_id=this.itemid;


    this._MJFService.AddSpecification(this.model).subscribe(
        (response)=>{
          if (response=="" )  {

            this.getspecification();


          }
          else
          {
            this.getspecification();
          }
          form.resetForm();

        }


    );


  }

  deletespecification(id:number)
  {
    if (confirm('Are you sure to delete this record?')==true){
      this._MJFService.DeleteSpecification(id).subscribe(
        (x=>{

            this.getspecification();
        })
      );
    }
  }
  cancel(){
    this._router.navigate(['/items']);
  }


  getspecification(){
    this._MJFService.getspecification(this.itemid).subscribe(

      (data)=>{
        this.itemspecification=data;


    },
    error => {
               alert(error);

             }
    );

  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { itemspecification } from 'src/app/models/itemspecification';
import { MjfserviceService } from 'src/app/services/mjfservice.service';


@Component({
  selector: 'app-editspecification',
  templateUrl: './editspecification.component.html',
  styleUrls: ['./editspecification.component.css']
})
export class EditspecificationComponent implements OnInit {
  id:number;
  itemid:number;
  specification:string;
  model:itemspecification=new itemspecification();

  constructor(private _MJFService:MjfserviceService,
    private _avRoute:ActivatedRoute,
    private _router:Router) {

      if (this._avRoute.snapshot.params["id"]){
        this.model.id=this._avRoute.snapshot.params["id"]
        this.model.item_specification=this._avRoute.snapshot.params["specification"]
        this.model.seq_no=this._avRoute.snapshot.params["seq_no"]
        this.itemid=this._avRoute.snapshot.params["itemid"]

      }
    }

  ngOnInit(): void {

  }

  onFormSubmit(){



    this._MJFService.EditSpecification(this.model).subscribe(
        (response)=>{
          if (response=="" )  {

            this._router.navigate(['/addspecification',this.itemid]);
          }
          else
          {
            //alert(response + "Error");
            this._router.navigate(['/addspecification',this.itemid]);
          }

        }


    );


  }

  cancel(){
    this._router.navigate(['/addspecification',this.itemid]);
  }

}

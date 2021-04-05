import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { MjfserviceService } from 'src/app/services/mjfservice.service';
@Component({
  selector: 'app-edit',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css']
})
export class EditCustomerComponent implements OnInit {
  waived:boolean=false
  id:number;
  FirstName:string;
  Email:string;
  constructor( private _avRoute:ActivatedRoute,
               private _router:Router,
               private _MJFService:MjfserviceService) {


    if (this._avRoute.snapshot.params["id"]){
      this.id=this._avRoute.snapshot.params["id"]
      this.FirstName=this._avRoute.snapshot.params["FirstName"]
      this.Email=this._avRoute.snapshot.params["Email"]
      this.waived=this._avRoute.snapshot.params["waived"]


    }
  }

  ngOnInit(): void {
  }


  onFormSubmit(form: NgForm){
    let customer=new Customer();
    const waived = form.value.waived;
    customer.customer_id=this.id;
    customer.WaviedShippingCharges=waived;

    this._MJFService.WaviedShippingCharges(customer).subscribe(

      (response)=>{
        if (response=="")  {

          this._router.navigate(['/customer']);
        }
        else
        {

          this._router.navigate(['/customer']);
        }
      }

  );

  }

  cancel(){
    this._router.navigate(['/customer']);
  }


}

import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { MjfserviceService } from 'src/app/services/mjfservice.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customer:Customer[]=[]; //blank array to start with
  loading:boolean=true;
  constructor(private _MJFService:MjfserviceService) { }

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer()
  {
    this._MJFService.getCustomer().subscribe(
      {
        next:(result)=>{
           this.customer=result
        },
        complete:()=>{
          this.loading=false;
        }
      }

    );
  }

}

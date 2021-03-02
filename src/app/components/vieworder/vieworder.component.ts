import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OrderDetail } from 'src/app/models/OrderDetail';
import { MjfserviceService } from 'src/app/services/mjfservice.service';


@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.component.html',
  styleUrls: ['./vieworder.component.css']
})
export class VieworderComponent implements OnInit {
  orderid:number
  orderdetails:OrderDetail;
  Total:number=0;
  GrandTotal:number=0;


  constructor(private activeRoute:ActivatedRoute,
              private _MJFService:MjfserviceService) {

                this.activeRoute.params.subscribe(
                  (params:Params) =>{
                      this.orderid=params.id;

                  }

              );
              }

  ngOnInit(): void {
    this.LoadOrderDetail();
  }

/*   LoadOrderDetail(){

           this._MJFService.getOrderDetail(this.orderid).subscribe(

          (data)=>{
            this.orderdetails=data;
            data[0].OrderItems.forEach(cs=>{
              let qtyprice= cs.OrderedQuantity * cs.PerUnitPrice;
              this.Total=+this.Total + +qtyprice;
            })
        },
        error => {
                   alert(error);
                 }
        );



  } */

  LoadOrderDetail(){

    this._MJFService.getOrderDetail(this.orderid).subscribe(
     {
       next:(data)=>{
         this.orderdetails=data;

         data[0].OrderItems.forEach(cs=>{

           let qtyprice= cs.OrderedQuantity * cs.PerUnitPrice;

           this.Total=+this.Total + +qtyprice;


       })
     },
     complete:()=>{
         this.GrandTotal= this.Total +  + this.orderdetails[0].ShipingCharges;

     }
   }
  )
  }





}






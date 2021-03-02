import { Component, OnInit } from '@angular/core';
import { OrderDetail } from 'src/app/models/OrderDetail';
import { MjfserviceService } from 'src/app/services/mjfservice.service';
import {Updateorderstatus} from 'src/app/models/Updateorderstatus'

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
  orderdetails:OrderDetail[]=[];
  showModal: boolean;
  content:string;
  title:string;
  Message:string;
  Status:number
  OrderStatus:Updateorderstatus=new Updateorderstatus();
  constructor(private _MJFService:MjfserviceService) { }

  ngOnInit(): void {
    this.GetOrders()
  }

  GetOrders()
  {

         this._MJFService.getOrders().subscribe(

        (data)=>{
          this.orderdetails=data;
          console.log(this.orderdetails)
      },
      error => {
                 alert(error);

               }
      );




  }
  showRemindar(orderid:number,OrderNumber:string)
  {
      this.Status=0;
      this.Message="";

      this.OrderStatus.OrderID=orderid;
      this.showModal = true; // Show-Hide Modal Check
      this.content = ""; // Dynamic Data
      this.title = "Change Order Status:" + OrderNumber ;    // Dynamic Data
 }
  //Bootstrap Modal Close event
  hide()
  {
      this.showModal = false;
  }


  UpdateOrderStatus()
  {
    this.OrderStatus.Status=this.Status;
    this.OrderStatus.Remarks=this.Message
    this._MJFService.UpdateOrderStatus(this.OrderStatus).subscribe(

      (data)=>{
        if (data){
          this.showModal = false;
          this.Message="";
          this.Status=0;
          this.GetOrders();
        }
        else
        {
          alert("Error while updating Status.......");
        }

    },
    error => {
               alert(error);

             }
    );




}
}

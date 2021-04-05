import { DecimalPipe } from '@angular/common';
import {OrderItems} from 'src/app/models/OrderItems';
export class OrderDetail
{
     forEach(arg0: (cs: any) => void) {
       throw new Error('Method not implemented.');
     }
     OrderID :number;
     OrderNumber:string;
     OrderDate:Date;
     CustomerId :number;
     CustomerFirstName:string;
     CustomerLastName:string;
     DeliveryAddress:string;
     AreaID :number
     AreaDescription:string;
     ShipingCharges :number=0;
     ContactNumber:string;
     OrderPayMethod :string;
     PaymentRefrenceId :string;
     Total:number;
     TaxAmount:number=0;
     ItemTaxableAmount:number=0;
     Remarks:string;
     Status:number;
     StatusDescription:string;
     OrderItems:OrderItems[];
}

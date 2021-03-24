export class ProductViewModel {
  catalog_description:string;
  category_description:string;
  category_id: number;
  item_id:number;
  item_description: string;
  item_size:string;
  item_uom:string;
  item_price :number;
  oldprice:number
  item_primary_thumb:string="";
  item_secondary_thumb:string="";
  qty:number=1;
  ApplyTax:boolean;
  ShowonlandingPage:boolean;
  itemsimages: string[];
  itemspecification:string[];




}

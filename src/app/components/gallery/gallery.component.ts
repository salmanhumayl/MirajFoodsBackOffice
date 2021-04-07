import { Component, OnInit,Renderer2,ElementRef,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { itemimage } from 'src/app/models/itemimage';
import { MjfserviceService } from 'src/app/services/mjfservice.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  error:string;
  uploadError:string;
  item_id:number;
  itemimage:itemimage[]=[]
  @ViewChild('image') private image :ElementRef;


  constructor(private _MJFService:MjfserviceService,
              private renderer:Renderer2,
              private _avRoute:ActivatedRoute,) {

                if (this._avRoute.snapshot.params["itemid"]){
                  this.item_id=this._avRoute.snapshot.params["itemid"]
                }
               }

  ngOnInit(): void {
    this.getImagelist();
  }

  onSelectedFile(event){

    if (event.target.files.length > 0 )
    {
      const productImage=event.target.files[0];
      const formData=new FormData();
      formData.append('gallery',productImage);
      formData.append('item_id',this.item_id.toString());


      this._MJFService.UploadImage(formData).subscribe(
          res =>{
              if (res.id > 0){

                  this.uploadError='';
                  const li:HTMLLIElement=this.renderer.createElement('li');
                  const img:HTMLImageElement=this.renderer.createElement('img');
                  img.src=res.ImagePath;
                  this.renderer.addClass(img,'product-image');
                  const a :HTMLAnchorElement=this.renderer.createElement('a');
                  a.innerText='Delete';
                  a.addEventListener('click',this.deleteImage.bind(this,res.id,a));
                  this.renderer.addClass(a,'delete-btn');
                  this.renderer.appendChild(this.image.nativeElement,li)
                  this.renderer.appendChild(li,img);
                  this.renderer.appendChild(li,a);
              }
              else{

                this.uploadError="Error upload file";
              }
          }

      )
    }
  }

  deleteImage(id:number, a){
    this._MJFService.deleteImage(id).subscribe(
      res=>{
        a.parentElement.remove();
      }
    );
  }

  deleteImageList(id:number){
    this._MJFService.deleteImage(id).subscribe(
      res=>{
          this.getImagelist();
      }
    );
  }

  getImagelist( )
  {
    this._MJFService.getImagelist(this.item_id).subscribe(
      res =>{
        this.itemimage=res;
      }

    );

  }


}

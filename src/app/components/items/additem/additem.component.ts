import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  isValidFormSubmitted:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(){

  }

}

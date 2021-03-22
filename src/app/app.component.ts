import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { MessengerService } from './services/messenger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MirajFoodsBackOffice';
  IsAutenticat:boolean;

  constructor(private authService: AuthenticationService,
              private msg:MessengerService) { }

  ngOnInit(): void {
    this.msg.IsAutenticat$.subscribe(data => this.IsAutenticat= data);

  }


}

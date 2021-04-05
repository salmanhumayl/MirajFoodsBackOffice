import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor( private authService: AuthenticationService,
    private msg:MessengerService,
    private router:Router) { }

  ngOnInit(): void {

         this.authService.removeToken();
        this.msg.IsAutenticat$.next(false);
        this.router.navigate(['login']);

  }

}

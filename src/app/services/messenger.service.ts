import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  IsAutenticat$=new BehaviorSubject(false);

  constructor() { }
}

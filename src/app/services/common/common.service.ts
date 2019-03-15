import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { userModel } from 'src/app/models/userModel';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private userObj = new BehaviorSubject(null);

  userDetails = this.userObj.asObservable();


  
  constructor() { }

  updateUserDetails(user:userModel){
    this.userObj.next(user);
  }
}


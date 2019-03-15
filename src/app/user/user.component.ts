import { Component, OnInit } from '@angular/core';

import {CommonService} from 'src/app/services/common/common.service';
import { userModel } from '../models/userModel';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userDetails:userModel;
  

  
  constructor(private common:CommonService) { }

  ngOnInit() {
   
    this.common.userDetails.subscribe(userDetails => {
      this.userDetails = userDetails;
    })

  }


}

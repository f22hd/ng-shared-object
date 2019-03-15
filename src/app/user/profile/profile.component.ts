import { Component, OnInit } from '@angular/core';
import { userModel } from 'src/app/models/userModel';
import { UserStatuses } from "src/app/models/UserStatuses";
import {CommonService} from 'src/app/services/common/common.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userDetails:userModel = {username:'',email:'',status: 'ACTIVE'};
  status;

  statusList = UserStatuses;

  constructor(private common:CommonService,private router:Router) { }

  ngOnInit() {
    this.common.userDetails.subscribe((details:userModel) => {
        if(details){
          this.userDetails = details;
          this.status = this.userDetails.status;
        }
    });
  }


  update(){
    this.userDetails.status = this.status;
    this.common.updateUserDetails(this.userDetails);
    this.router.navigateByUrl('/user/favorite');
  }

}

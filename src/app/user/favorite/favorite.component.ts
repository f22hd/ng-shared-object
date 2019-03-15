import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common/common.service';

import { userModel } from 'src/app/models/userModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  userDetails: userModel = { username: '', email: '', status: 'ACTIVE' };

  email: string;

  constructor(private common: CommonService,private router:Router) { }

  ngOnInit() {
    this.common.userDetails.subscribe((userDetails: userModel) => {
      if (userDetails) {
        this.userDetails = userDetails;
        this.email = this.userDetails.email;
      }
    })

  }


  update(){
    this.userDetails.email = this.email;
    this.common.updateUserDetails(this.userDetails);
    this.router.navigateByUrl('/user/output');
  }


}

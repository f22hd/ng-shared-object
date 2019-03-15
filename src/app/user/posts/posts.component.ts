import { Component, OnInit, OnDestroy } from '@angular/core';
import {CommonService} from 'src/app/services/common/common.service';
import { userModel } from 'src/app/models/userModel';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {
  
  subscription:Subscription;

  userDetails:userModel = {username:'',email:'',status:'ACTIVE'};
  username:string;

  constructor(private common:CommonService,private router:Router) { }

  ngOnInit() {
    this.subscription = this.common.userDetails.subscribe((userDetails:userModel) => {
      if(userDetails){
        this.userDetails = userDetails;
        this.username = this.userDetails.username;
      }
    });
  }


  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    // if we need close subscription channel.
    this.subscription.unsubscribe();
    
  }

  update(){
      this.userDetails.username = this.username;
      this.common.updateUserDetails(this.userDetails);
      this.router.navigateByUrl('/user/profile');
  }

}

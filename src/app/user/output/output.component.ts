import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common/common.service';
import { userModel } from 'src/app/models/userModel';


@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  userDetails: userModel = null;

  
  constructor(private common: CommonService) { }

  ngOnInit() {
    this.common.userDetails.subscribe((userDetails: userModel) => {
      if (userDetails) {
        this.userDetails = userDetails;
      }
    })

  }

}

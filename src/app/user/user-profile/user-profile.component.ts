import { Component, OnInit } from '@angular/core';
import { ProjectKUtils } from '../../app.utils';
import { ILoggedInUser } from '../../IGlobal';

import { UserService } from '../user.service';

import { IUser } from '../IUser';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userDetails: IUser;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserDetails(ProjectKUtils.prototype.getLoggedInUserDetails().userId)
      .subscribe(userDetails => {
        if (userDetails) {
          this.userDetails = userDetails;
        }
      }, error => {
        console.log(error);
      });
  }

}

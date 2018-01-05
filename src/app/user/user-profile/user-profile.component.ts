import { Component, OnInit } from '@angular/core';
import { ProjectKUtils } from '../../app.utils';
import { ILoggedInUser } from '../../IGlobal';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { UserService } from '../user.service';

import { IUser } from '../IUser';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userDetails: IUser;

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const userDetails = this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.userService.getUserDetails(params.get('id') === 'my' ?
          ProjectKUtils.prototype.getLoggedInUserDetails().userId : params.get('id')));

    userDetails.subscribe(fetchedDetails => {
      this.userDetails = fetchedDetails;
    }, error => { console.log(error); });
  }

}

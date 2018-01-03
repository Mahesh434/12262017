import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

import { ILogin } from '../ILogin';
import { ILoggedInUser } from '../../IGlobal';

import { PKMenu, PKMenuItem, PKCompleteMenu } from '../../app.menu';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public fb: FormBuilder, private loginService: LoginService, private _router: Router) { }

  public loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  login(): void {
    console.log(this.loginForm.value);
    const loginDetails: ILogin = {
      loginId: this.loginForm.value['email'],
      password: this.loginForm.value['password']
    };

    this.loginService.validateLoginDetails(loginDetails)
      .subscribe(loggedInDetails => {
        if (loggedInDetails) {
          PKMenu.splice(0, PKMenu.length);
          loggedInDetails.permissions.forEach(function (permission) {
            const menuItem = PKCompleteMenu.find(function (item) {
              return item.key === permission;
            });
            if (menuItem) {
              PKMenu.push(menuItem);
            }
          });
          this._router.navigateByUrl(PKMenu[0].route);
        }
      }, error => {
        console.log(error);
      });
  }

  ngOnInit() {
  }

}

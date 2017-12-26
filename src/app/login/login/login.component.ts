import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

import { ILogin, ILoggedInUser } from '../ILogin';

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
          this._router.navigateByUrl('/user/my-profile');
          console.log(loggedInDetails.permissions);
        }
      }, error => {
        console.log(error);
      });
  }

  ngOnInit() {
  }

}

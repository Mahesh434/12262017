import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(public fb: FormBuilder) { }

  public signupForm = this.fb.group({
    loginId: ['', Validators.required],
    password: ['', Validators.required],
    newPassword: ['', Validators.required]
  });

  signUp(): void {
    console.log(this.signupForm.value);
  }


  ngOnInit() {
  }

}

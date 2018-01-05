import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { UserService } from '../user.service';
import { IUser } from '../IUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  constructor(public fb: FormBuilder, private userService: UserService, private router: Router) { }

  public userCreateForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    mobileno: ['', Validators.required],
    dob: ['', Validators.required],
    height: ['', Validators.required],
    complexion: ['', Validators.required],
    education: ['', Validators.required],
    occupation: ['', Validators.required],
    maritalstatus: ['', Validators.required],
    paternalGotram: ['', Validators.required],
    maternalGotram: ['', Validators.required],
    star: ['', Validators.required],
    rasi: ['', Validators.required],
    salary: ['', Validators.required],
    gender: ['', Validators.required],
    caste: ['', Validators.required],
    aboutSelf: ['', Validators.required],
    address: ['', Validators.required],
    photoLink: ['', Validators.required],
    videoLink: ['', Validators.required]
  });

  masterFields: {};

  createUser(): void {
    const userDetails: IUser = {
      firstname: this.userCreateForm.value['firstname'],
      lastname: this.userCreateForm.value['lastname'],
      email: this.userCreateForm.value['email'],
      dob: this.userCreateForm.value['dob'],
      height: this.userCreateForm.value['height'],
      complexion: this.userCreateForm.value['complexion'],
      education: this.userCreateForm.value['education'],
      occupation: this.userCreateForm.value['occupation'],
      maritalstatus: this.userCreateForm.value['maritalstatus'],
      paternalGotram: this.userCreateForm.value['paternalGotram'],
      maternalGotram: this.userCreateForm.value['maternalGotram'],
      star: this.userCreateForm.value['star'],
      rasi: this.userCreateForm.value['rasi'],
      aboutSelf: window.btoa(this.userCreateForm.value['aboutSelf']),
      salary: this.userCreateForm.value['salary'],
      mobileno: this.userCreateForm.value['mobileno'],
      address: this.userCreateForm.value['address'],
      photoLink: this.userCreateForm.value['photoLink'],
      videoLink: this.userCreateForm.value['videoLink'],
      gender: this.userCreateForm.value['gender'],
      caste: this.userCreateForm.value['caste']
    };

    this.userService.createUser(userDetails)
      .subscribe(userId => {
        this.router.navigate(['/user/all']);
      }, error => {
        console.log(error);
      });
  }

  ngOnInit() {
    this.userService.getMasterFields()
      .subscribe(masterFields => {
        this.masterFields = masterFields;
      }, error => console.log(error));
  }

}

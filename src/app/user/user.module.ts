import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { UserRouting } from './user.routing';

import { UserService } from './user.service';
import { UserAllComponent } from './user-all/user-all.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRouting
  ],
  declarations: [UserCreateComponent, UserEditComponent, UserDeleteComponent, UserProfileComponent, UserAllComponent],
  providers: [UserService]
})
export class UserModule { }

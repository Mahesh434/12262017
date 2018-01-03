import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { UserRouting } from './user.routing';

import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule,
    UserRouting
  ],
  declarations: [UserCreateComponent, UserEditComponent, UserDeleteComponent, UserProfileComponent],
  providers: [UserService]
})
export class UserModule { }

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginRouting } from './login.routing';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { LoginService } from './login.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    LoginRouting
  ],
  declarations: [LoginComponent, SignupComponent],
  providers: [LoginService]
})
export class LoginModule {

}

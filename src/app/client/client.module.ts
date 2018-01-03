import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientRouting } from './client.routing';

import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientDeleteComponent } from './client-delete/client-delete.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

import { ClientService } from './client.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClientRouting
  ],
  declarations: [ClientCreateComponent, ClientEditComponent, ClientDeleteComponent, MyProfileComponent],
  providers: [ClientService]
})
export class ClientModule { }

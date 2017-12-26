import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientDeleteComponent } from './client-delete/client-delete.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ClientCreateComponent, ClientEditComponent, ClientDeleteComponent]
})
export class ClientModule { }

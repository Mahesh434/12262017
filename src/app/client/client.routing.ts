import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientDeleteComponent } from './client-delete/client-delete.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

import { AuthGuard } from '../guards/auth.guard';

const clientRoutes: Routes = [
    {
        path: '', children: [
            { path: 'create', component: ClientCreateComponent },
            { path: 'edit', component: ClientEditComponent },
            { path: 'delete', component: ClientDeleteComponent },
            { path: 'my-profile', component: MyProfileComponent }
        ], canActivate: [AuthGuard]
    },
];
export const ClientRouting = RouterModule.forChild(clientRoutes);

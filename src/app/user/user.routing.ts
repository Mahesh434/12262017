import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { AuthGuard } from '../guards/auth.guard';

const userRoutes: Routes = [
    {
        path: '', children: [
            { path: 'create', component: UserCreateComponent },
            { path: 'edit', component: UserEditComponent },
            { path: 'delete', component: UserDeleteComponent },
            { path: 'my-profile', component: UserProfileComponent }
        ], canActivate: [AuthGuard]
    },
];
export const UserRouting = RouterModule.forChild(userRoutes);

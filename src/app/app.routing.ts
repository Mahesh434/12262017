import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login/login.component';
import { SignupComponent } from './login/signup/signup.component';

import { ClientCreateComponent } from './client/client-create/client-create.component';
import { ClientEditComponent } from './client/client-edit/client-edit.component';
import { ClientDeleteComponent } from './client/client-delete/client-delete.component';

import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDeleteComponent } from './user/user-delete/user-delete.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';

const routes: Routes = [
    {
        path: 'projectk', children: [
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignupComponent },
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: '**', redirectTo: 'login', pathMatch: 'full' }
        ]
    },
    {
        path: 'client', children: [
            { path: 'create', component: ClientCreateComponent },
            { path: 'edit', component: ClientEditComponent },
            { path: 'delete', component: ClientDeleteComponent },
        ]
    },
    {
        path: 'user', children: [
            { path: 'create', component: UserCreateComponent },
            { path: 'edit', component: UserEditComponent },
            { path: 'delete', component: UserDeleteComponent },
            { path: 'my-profile', component: UserProfileComponent }
        ]
    },
    { path: '', redirectTo: 'projectk', pathMatch: 'full' },
    { path: '**', redirectTo: 'projectk', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}

export const RoutingComponent = [LoginComponent, SignupComponent, ClientCreateComponent,
    ClientEditComponent, ClientDeleteComponent, UserCreateComponent, UserEditComponent, UserDeleteComponent, UserProfileComponent];

export const PKMenu: PKMenuItem[] = [
    { key: 'LOGIN', route: '/projectk', icon: 'fa fa-sign-in', name: 'Login', children: [], hideChildren: true },
    {
        key: 'CLIENT', route: '/client', icon: 'fa fa-address-book-o', name: 'Client', children: [
            { key: 'CLIENT_CREATE', route: '/create', icon: 'fa fa-user-plus', name: 'Create', children: [], hideChildren: true },
            { key: 'CLIENT_EDIT', route: '/edit', icon: 'fa fa-pencil-square-o', name: 'Edit', children: [], hideChildren: true },
            { key: 'CLIENT_DELETE', route: '/delete', icon: 'fa fa-trash-o', name: 'Delete', children: [], hideChildren: true }
        ], hideChildren: true
    },
    {
        key: 'USER', route: '/user', icon: 'fa fa-user-circle-o', name: 'User', children: [
            { key: 'USER_CREATE', route: '/create', icon: 'fa fa-user-plus', name: 'Create', children: [], hideChildren: true },
            { key: 'USER_EDIT', route: '/edit', icon: 'fa fa-pencil-square-o', name: 'Edit', children: [], hideChildren: true },
            { key: 'USER_DELETE', route: '/delete', icon: 'fa fa-trash-o', name: 'Delete', children: [], hideChildren: true }
        ], hideChildren: true
    },
    {
        key: 'USER_MY_PROFILE', route: '/user/my-profile', icon: 'fa fa-user-circle-o',
        name: 'My Profile', children: [], hideChildren: true
    }
];

export interface PKMenuItem {
    key: string;
    route: string;
    icon: string;
    name: string;
    children: PKMenuItem[];
    hideChildren: boolean;
}




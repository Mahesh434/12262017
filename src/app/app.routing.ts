import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './static-content/welcome/welcome.component';
import { AboutUsComponent } from './static-content/about-us/about-us.component';
import { ContactUsComponent } from './static-content/contact-us/contact-us.component';

import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { SearchComponent } from './search/search/search.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    { path: 'welcome', component: WelcomeComponent },
    { path: 'aboutus', component: AboutUsComponent },
    { path: 'contactus', component: ContactUsComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
    { path: 'projectk', loadChildren: './login/login.module#LoginModule' },
    { path: 'client', loadChildren: './client/client.module#ClientModule' },
    { path: 'user', loadChildren: './user/user.module#UserModule' }
    // { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    // { path: '**', redirectTo: 'welcome', pathMatch: 'full' } // Not Found
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}

export const RoutingComponent = [DashboardComponent, SearchComponent, WelcomeComponent,
    AboutUsComponent, ContactUsComponent];

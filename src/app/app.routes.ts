import { Routes } from '@angular/router';
import { HomeComponent } from './misc/home/home.component';
import { AboutComponent } from './misc/about/about.component';
import { UserListComponent } from './prs/user/user-list/user-list.component';
import { E404Component } from './misc/e404/e404.component';
import { UserViewComponent } from './prs/user/user-view/user-view.component';
import { UserChangeComponent } from './prs/user/user-change/user-change.component';
import { UserCreateComponent } from './prs/user/user-create/user-create.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'user/list', component: UserListComponent},
    { path: 'user/view/:id', component: UserViewComponent},
    { path: 'user/create', component: UserCreateComponent},
    { path: 'user/change/:id', component: UserChangeComponent},

    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: '**', component: E404Component } // Wildcard route for a 404 page,
];

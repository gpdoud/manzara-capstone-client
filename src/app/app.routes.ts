import { Routes } from '@angular/router';
import { HomeComponent } from './misc/home/home.component';
import { AboutComponent } from './misc/about/about.component';
import { UserListComponent } from './prs/user/user-list/user-list.component';
import { E404Component } from './misc/e404/e404.component';
import { UserViewComponent } from './prs/user/user-view/user-view.component';
import { UserChangeComponent } from './prs/user/user-change/user-change.component';
import { UserCreateComponent } from './prs/user/user-create/user-create.component';
import { UserLoginComponent } from './prs/user/user-login/user-login.component';
import { VendorChangeComponent } from './prs/vendor/vendor-change/vendor-change.component';
import { VendorCreateComponent } from './prs/vendor/vendor-create/vendor-create.component';
import { VendorListComponent } from './prs/vendor/vendor-list/vendor-list.component';
import { VendorViewComponent } from './prs/vendor/vendor-view/vendor-view.component';
import { ProductChangeComponent } from './prs/product/product-change/product-change.component';
import { ProductCreateComponent } from './prs/product/product-create/product-create.component';
import { ProductListComponent } from './prs/product/product-list/product-list.component';
import { ProductViewComponent } from './prs/product/product-view/product-view.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },

    { path: 'product/list', component: ProductListComponent},
    { path: 'product/view/:id', component: ProductViewComponent},
    { path: 'product/create', component: ProductCreateComponent},
    { path: 'product/change/:id', component: ProductChangeComponent},

    { path: 'user/list', component: UserListComponent},
    { path: 'user/view/:id', component: UserViewComponent},
    { path: 'user/create', component: UserCreateComponent},
    { path: 'user/change/:id', component: UserChangeComponent},
    { path: 'user/login', component: UserLoginComponent},

    { path: 'vendor/list', component: VendorListComponent},
    { path: 'vendor/view/:id', component: VendorViewComponent},
    { path: 'vendor/create', component: VendorCreateComponent},
    { path: 'vendor/change/:id', component: VendorChangeComponent},


    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: '**', component: E404Component } // Wildcard route for a 404 page,
];

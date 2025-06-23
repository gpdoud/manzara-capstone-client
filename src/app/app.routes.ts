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
import { RequestChangeComponent } from './prs/request/request-change/request-change.component';
import { RequestCreateComponent } from './prs/request/request-create/request-create.component';
import { RequestListComponent } from './prs/request/request-list/request-list.component';
import { RequestViewComponent } from './prs/request/request-view/request-view.component';
import { RequestLinesComponent } from './prs/request/request-lines/request-lines.component';
import { RequestlineChangeComponent } from './prs/requestline/requestline-change/requestline-change.component';
import { RequestlineCreateComponent } from './prs/requestline/requestline-create/requestline-create.component';
import { RequestReviewListComponent } from './prs/request/request-review-list/request-review-list.component';
import { RequestReviewItemComponent } from './prs/request/request-review-item/request-review-item.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },

    { path: 'product/list', component: ProductListComponent},
    { path: 'product/view/:id', component: ProductViewComponent},
    { path: 'product/create', component: ProductCreateComponent},
    { path: 'product/change/:id', component: ProductChangeComponent},

    { path: 'request/list', component: RequestListComponent},
    { path: 'request/view/:id', component: RequestViewComponent},
    { path: 'request/create', component: RequestCreateComponent},
    { path: 'request/change/:id', component: RequestChangeComponent},
    { path: 'request/lines/:id', component: RequestLinesComponent},
    { path: 'request/review/list', component: RequestReviewListComponent},
    { path: 'request/review/item/:id', component: RequestReviewItemComponent},

    { path: 'requestline/create/:rid', component: RequestlineCreateComponent},
    { path: 'requestline/change/:id', component: RequestlineChangeComponent},

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

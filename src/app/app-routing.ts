import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

import { SecureComponent } from "./layouts/secure/secure.component";
import { PurchaseComponent } from './main/purchase/purchase.component';
import { LoginComponent } from './auth/login/login.component';
import { UsersComponent } from './main/users/users.component';

const appRoutes: Route[] = [
  {
    path: '', children: [
      { path: 'login', component: LoginComponent },
      { path: '',component: SecureComponent,children:[
          { path: 'users', component: UsersComponent},
        ] 
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

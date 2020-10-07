import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

import { SecureComponent } from "./layouts/secure/secure.component";
// import { HomeComponent } from './client/home/home.component';
import { LoginComponent } from './auth/login/login.component';

const appRoutes: Route[] = [
  {
    path: '', children: [
      { path: 'login', component: LoginComponent },
      { path: '',component: SecureComponent,children:[
          // { path: '', component: HomeComponent},
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

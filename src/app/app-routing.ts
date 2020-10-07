import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

import { SecureComponent } from "./layouts/secure/secure.component";
import { HomeComponent } from './client/home/home.component';
import { ApplicationsComponent } from './client/applications/applications.component';
import { ProductIdeasComponent } from './client/product-ideas/product-ideas.component';
import { DigitalEmailMarketingComponent } from './client/digital-email-marketing/digital-email-marketing.component';
import { MailerLiteComponent } from './client/mailer-lite/mailer-lite.component';
import { LoginComponent } from './shared/components/login/login.component';

const appRoutes: Route[] = [
  {
    path: '', component: SecureComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'applications', component: ApplicationsComponent },
      { path: 'product-ideas', component: ProductIdeasComponent },
      { path: 'login', component: LoginComponent },
      { path: 'digital-email-marketing', component: DigitalEmailMarketingComponent },
      { path: 'mailer-lite', component: MailerLiteComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

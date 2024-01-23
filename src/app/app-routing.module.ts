import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { FormateurRoutingModule } from './dashboard/formateur/formateur-routing.module';
import { WelcomeRoutingModule } from './welcome/welcome-routing.module';
import { LoginRoutingModule } from './login/login-routing.module';
import { RegisterRoutingModule } from './register/register-routing.module';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    DashboardRoutingModule,FormateurRoutingModule,WelcomeRoutingModule,LoginRoutingModule,RegisterRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

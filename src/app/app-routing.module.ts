import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { FormateurRoutingModule } from './dashboard/formateur/formateur-routing.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    DashboardRoutingModule,FormateurRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

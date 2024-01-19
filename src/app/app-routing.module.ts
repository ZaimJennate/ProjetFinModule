import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    DashboardRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

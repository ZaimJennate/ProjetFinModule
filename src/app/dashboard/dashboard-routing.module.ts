import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TableComponent } from './formateur/table/table.component';
import { FormComponent } from './formateur/form/form.component';

const routes: Routes = [
  {path:"dashboard",redirectTo:"dashboard/main",pathMatch:"full"},
  {path:"dashboard/main",component:MainComponent},
  {path:"dashboard/table",component:TableComponent},
  {path:"dashboard/form",component:FormComponent},

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

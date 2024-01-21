import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TableComponent } from './formateur/table/table.component';
import { FormComponent } from './formateur/form/form.component';
import { FormateurRoutingModule } from './formateur/formateur-routing.module';
import { FormateurComponent } from './formateur/formateur.component';
import { FormationComponent } from './formation/formation.component';
import { FormationRoutingModule } from './formation/formation-routing.module';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { EntrepriseRoutingModule } from './entreprise/entreprise-routing.module';

const routes: Routes = [
  {path:"dashboard",redirectTo:"dashboard/main",pathMatch:"full"},
  {path:"dashboard/main",component:MainComponent},
  {path:"dashboard/Formateur",component:FormateurComponent},
  {path:"dashboard/Formation",component:FormationComponent},
  {path:"dashboard/Entreprise",component:EntrepriseComponent},
];

@NgModule({

  imports: [RouterModule.forRoot(routes),FormateurRoutingModule,FormationRoutingModule,EntrepriseRoutingModule],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EntrepriseComponent } from './entreprise.component';
import { Form3Component } from './form3/form3.component';
import { Table3Component } from './table3/table3.component';

const entrepriseRoutes: Routes = [
  {
    path: 'dashboard/Entreprise',
    component: EntrepriseComponent,
    children: [
      { path: 'form', component: Form3Component },
      { path: 'table', component: Table3Component },
      { path: 'form/:id', component: Form3Component },
      { path: '', redirectTo: 'table', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(entrepriseRoutes)],
  exports: [RouterModule],
})
export class EntrepriseRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { FormateurComponent } from './formateur.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const formateurRoutes: Routes = [
  {
    path: 'dashboard/Formateur',
    component: FormateurComponent,
    children: [
      { path: 'form', component: FormComponent },
      { path: 'table', component: TableComponent },
      { path: 'form/:id', component: FormComponent },
      { path: '', redirectTo: 'table', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(formateurRoutes),RouterModule.forRoot(formateurRoutes),MatSnackBarModule],
  exports: [RouterModule],
})
export class FormateurRoutingModule { }

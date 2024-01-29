import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormationComponent } from './formation.component';

import { Form2Component } from './form2/form2.component';
import { Table2Component } from './table2/table2.component';


//const formationRoutes: Routes = [
  //{
    //path: 'dashboard/Formation',
    //component: FormationComponent,
    //children: [
      //{ path: 'form', component: Form2Component },
      //{ path: 'table', component: Table2Component },
      //{ path: 'form/:id', component: Form2Component },
      //{ path: '', redirectTo: 'table', pathMatch: 'full' },
    //],
  //},
//];

@NgModule({
  imports: [],
  exports: [RouterModule],
})
export class FormationRoutingModule { }

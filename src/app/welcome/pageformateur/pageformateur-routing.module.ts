import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageformateurDetailleComponent } from '../pageformateur-detaille/pageformateur-detaille.component';
const routes: Routes = [
  
  { path: 'formateurdetails/:id', component: PageformateurDetailleComponent },

]


@NgModule({

  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class PageformateurRoutingModule { }

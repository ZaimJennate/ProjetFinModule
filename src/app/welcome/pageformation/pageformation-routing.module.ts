import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageformationDettaileComponent } from '../pageformation-dettaile/pageformation-dettaile.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  
  { path: 'dettailformation/:id', component: PageformationDettaileComponent },

]



@NgModule({

  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class PageformationRoutingModule { }

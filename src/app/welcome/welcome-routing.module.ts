import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormateurComponent } from '../dashboard/formateur/formateur.component';
const routes: Routes = [
  {path:"welcome",redirectTo:"welcome/home",pathMatch:"full"},
  {path:"welcome/home",component:HomeComponent},
  {path:"welcome/about",component:AboutComponent},
   {path:"formation",component:HomeComponent},
  {path:"formateur",component:FormateurComponent}

];
@NgModule({

  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }

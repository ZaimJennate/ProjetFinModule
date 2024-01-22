import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormateurComponent } from '../dashboard/formateur/formateur.component';
import { FormationComponent } from '../dashboard/formation/formation.component';
import { FormateurRoutingModule } from '../dashboard/formateur/formateur-routing.module';
import { FormationRoutingModule } from '../dashboard/formation/formation-routing.module';
import { LoginComponent } from '../login/login.component';
import { LoginRoutingModule } from '../login/login-routing.module';
const routes: Routes = [
  {path:"welcome",redirectTo:"welcome/home",pathMatch:"full"},
  {path:"welcome/home",component:HomeComponent},
  {path:"welcome/about",component:AboutComponent},
   {path:"formation",component:FormationComponent},
   {path:"formateur",component:FormateurComponent},
   {path:"login",component:LoginComponent},
  

];
@NgModule({

  imports: [RouterModule.forRoot(routes),FormateurRoutingModule,FormationRoutingModule,LoginRoutingModule],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }

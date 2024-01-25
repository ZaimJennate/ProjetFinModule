import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormateurComponent } from '../dashboard/formateur/formateur.component';
import { FormationComponent } from '../dashboard/formation/formation.component';
import { FormateurRoutingModule } from '../dashboard/formateur/formateur-routing.module';
import { FormationRoutingModule } from '../dashboard/formation/formation-routing.module';
import { LoginComponent } from '../login/login.component';
import { LoginRoutingModule } from '../login/login-routing.module';
import { RegisterComponent } from '../register/register.component';
import { RegisterRoutingModule } from '../register/register-routing.module';
import { PageformationComponent } from './pageformation/pageformation.component';
import { FormsModule } from '@angular/forms';
import { PageformationRoutingModule } from './pageformation/pageformation-routing.module';

const routes: Routes = [
  { path: "welcome", redirectTo: "welcome/home", pathMatch: "full" },
  { path: "welcome/home", component: HomeComponent },
  { path: "welcome/about", component: AboutComponent },
  { path: "formation", component: FormationComponent },
  { path: "formateur", component: FormateurComponent },
  { path: "pageformation", component: PageformationComponent },
  { path: "login", component: LoginComponent },

  { path: "register", component: RegisterComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule,  // Import CommonModule here
    FormateurRoutingModule,
    FormationRoutingModule,
    LoginRoutingModule,
    RegisterRoutingModule,
    PageformationRoutingModule,
  ],
  exports: [RouterModule],
})
export class WelcomeRoutingModule {}

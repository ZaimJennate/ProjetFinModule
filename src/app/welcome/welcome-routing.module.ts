import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormateurComponent } from '../dashboard/formateur/formateur.component';
import { FormationComponent } from '../dashboard/formation/formation.component';

import { LoginComponent } from '../login/login.component';

import { PageformationComponent } from './pageformation/pageformation.component';
import { FormsModule } from '@angular/forms';


//const routes: Routes = [
  //{ path: "welcome", redirectTo: "welcome/home", pathMatch: "full" },
 // { path: "welcome/home", component: HomeComponent },
  //{ path: "welcome/about", component: AboutComponent },
  //{ path: "formation", component: FormationComponent },
  //{ path: "formateur", component: FormateurComponent },
  //{ path: "pageformation", component: PageformationComponent },
  //{ path: "login", component: LoginComponent },

  //{ path: "register", component: RegisterComponent },
//];

@NgModule({
  imports: [
    
    CommonModule,
    FormsModule,  // Import CommonModule here

 
    
  ],
  exports: [RouterModule],
})
export class WelcomeRoutingModule {}

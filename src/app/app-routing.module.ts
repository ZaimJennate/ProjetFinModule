import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './dashboard/main/main.component';
import { FormateurComponent } from './dashboard/formateur/formateur.component';
import { TableComponent } from './dashboard/formateur/table/table.component';
import { FormComponent } from './dashboard/formateur/form/form.component';
import { FormationComponent } from './dashboard/formation/formation.component';
import { Table2Component } from './dashboard/formation/table2/table2.component';
import { Form2Component } from './dashboard/formation/form2/form2.component';
import { EntrepriseComponent } from './dashboard/entreprise/entreprise.component';
import { Table3Component } from './dashboard/entreprise/table3/table3.component';
import { Form3Component } from './dashboard/entreprise/form3/form3.component';
import { PlanifierFormationComponent } from './dashboard/planifier-formation/planifier-formation.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './welcome/home/home.component';
import { AboutComponent } from './welcome/about/about.component';
import { PageformationComponent } from './welcome/pageformation/pageformation.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageformationDettaileComponent } from './welcome/pageformation-dettaile/pageformation-dettaile.component';
import { TablecategorieComponent } from './dashboard/categorie/tablecategorie/tablecategorie.component';
import { CategorieComponent } from './dashboard/categorie/categorie.component';
import { JoinforfreeComponent } from './joinforfree/joinforfree.component';
export const routes: Routes = [
  { path: '', component: WelcomeComponent, 
  children: [
    { path: '', component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "formation", component: FormationComponent },
    { path: "formateur", component: FormateurComponent },
    { path: "pageformation", component: PageformationComponent },
  
    { path: 'dettailformation/:id', component: PageformationDettaileComponent },
    
    {path:"joinforfree",component:JoinforfreeComponent},
    { path: "login", component: LoginComponent },
  
    { path: "register", component: RegisterComponent },
  ],
},

{
    path: 'Dashboard', component: DashboardComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'main', component: MainComponent },
      { path: 'Formateur', component: FormateurComponent,
      children: [
        { path: '', component: TableComponent },
        { path: 'Form', component: FormComponent },
        { path: 'Form/:id', component: FormComponent }
      ],
    },
      { path: 'Formation', component: FormationComponent ,
      children: [
        { path: '', component: Table2Component },
        { path: 'Form2', component: Form2Component },
        { path: 'Form2/:id', component: Form2Component }
      ],},
      { path: 'Entreprise', component: EntrepriseComponent ,
      children: [
        { path: '', component: Table3Component },
        { path: 'Form3', component: Form3Component },
        { path: 'Form3/:id', component: Form3Component }
      ], },
      { path: 'PlanifierFormation', component: PlanifierFormationComponent },
      { path: 'Categorie', component: CategorieComponent ,
      children: [
        { path: '', component: TablecategorieComponent },
        { path: ':id', component: TablecategorieComponent },
      ], },
   
    ],
},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

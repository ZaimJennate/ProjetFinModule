import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AsideComponent } from './dashboard/aside/aside.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './dashboard/main/main.component';
import { FormateurComponent } from './dashboard/formateur/formateur.component';
import { FormComponent } from './dashboard/formateur/form/form.component';
import { TableComponent } from './dashboard/formateur/table/table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormationComponent } from './dashboard/formation/formation.component';
import { Form2Component } from './dashboard/formation/form2/form2.component';
import { Table2Component } from './dashboard/formation/table2/table2.component';
import { EntrepriseComponent } from './dashboard/entreprise/entreprise.component';
import { Form3Component } from './dashboard/entreprise/form3/form3.component';
import { Table3Component } from './dashboard/entreprise/table3/table3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AboutComponent } from './welcome/about/about.component';
import { NavComponent } from './welcome/nav/nav.component';
import { FootComponent } from './welcome/foot/foot.component';
import { HomeComponent } from './welcome/home/home.component';
import { CarouselComponent } from './welcome/home/carousel/carousel.component';
import { CardsComponent } from './welcome/home/cards/cards.component'; 
import { ContainComponent } from './welcome/home/contain/contain.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';

import { PlanifierFormationComponent } from './dashboard/planifier-formation/planifier-formation.component';
import { CommonModule } from '@angular/common';
import { PageformationComponent } from './welcome/pageformation/pageformation.component';
import { PageformationDettaileComponent } from './welcome/pageformation-dettaile/pageformation-dettaile.component';
import { CategorieComponent } from './dashboard/categorie/categorie.component';
import { TablecategorieComponent } from './dashboard/categorie/tablecategorie/tablecategorie.component';
import { AfficheFormationComponent } from './welcome/affiche-formation/affiche-formation.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AsideComponent,
    MainComponent,
    FormateurComponent,
    FormComponent,
    TableComponent,
    FormationComponent,
    Form2Component,
    Table2Component,
    EntrepriseComponent,
    Form3Component,
    Table3Component,
    AboutComponent,
    NavComponent,
    FootComponent,
    HomeComponent,
    CarouselComponent,
    ContainComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
     CardsComponent,
     PlanifierFormationComponent,
     PageformationComponent,
     PageformationDettaileComponent,
     CategorieComponent,
     TablecategorieComponent,
     AfficheFormationComponent,
     
     
    
    ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSnackBarModule,

    CommonModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AsideComponent } from './dashboard/aside/aside.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './dashboard/main/main.component';
import { FormateurComponent } from './dashboard/formateur/formateur.component';
import { FormComponent } from './dashboard/formateur/form/form.component';
import { TableComponent } from './dashboard/formateur/table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AsideComponent,
    MainComponent,
    FormateurComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

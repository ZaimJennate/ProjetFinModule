import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from '../register/register-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
const routes: Routes = [
  
  {path:"register",component:RegisterComponent},

]
@NgModule({

  imports: [RouterModule.forRoot(routes),RegisterRoutingModule],
  exports: [RouterModule]
})
export class LoginRoutingModule { }

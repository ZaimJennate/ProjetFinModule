import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LoginRoutingModule } from '../login/login-routing.module';
const routes: Routes = [
    {path:"../login",component:LoginComponent},
]
@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }

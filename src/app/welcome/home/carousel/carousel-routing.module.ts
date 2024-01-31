import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageformationComponent } from '../../pageformation/pageformation.component';
import { PageformationRoutingModule } from '../../pageformation/pageformation-routing.module';
const routes: Routes = [
  
  // { path: 'pageformation', component: PageformationComponent },

]



@NgModule({

  imports: [RouterModule.forRoot(routes),CommonModule,PageformationRoutingModule],
  exports: [RouterModule]
})
export class CarouselRoutingModule { }

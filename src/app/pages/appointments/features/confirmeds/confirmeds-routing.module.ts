import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmedsComponent } from './confirmeds.component';

const routes: Routes = [
  { path: "", component: ConfirmedsComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfirmedsRoutingModule { }

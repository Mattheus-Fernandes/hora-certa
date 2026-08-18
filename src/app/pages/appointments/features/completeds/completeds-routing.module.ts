import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedsComponent } from './completeds.component';

const routes: Routes = [
  { path: "", component: CompletedsComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompletedsRoutingModule { }

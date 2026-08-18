import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanceledsComponent } from './canceleds.component';

const routes: Routes = [
  { path: "", component: CanceledsComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanceledsRoutingModule { }

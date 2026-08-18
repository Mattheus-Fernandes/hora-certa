import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemindsComponent } from './reminds.component';

const routes: Routes = [
  { path: "", component: RemindsComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemindsRoutingModule { }

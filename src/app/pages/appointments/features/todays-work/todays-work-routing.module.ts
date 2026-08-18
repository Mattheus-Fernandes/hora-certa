import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodaysWorkComponent } from './todays-work.component';

const routes: Routes = [
  { path: "", component: TodaysWorkComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodaysWorkRoutingModule { }

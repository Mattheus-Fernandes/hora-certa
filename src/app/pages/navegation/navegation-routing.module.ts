import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavegationComponent } from './navegation.component';

const routes: Routes = [
  {
    path: "", component: NavegationComponent,
    children: [
      { path: "appointments", loadChildren: () => import("../../pages/appointment/appointment.module").then(m => m.AppointmentModule) },
      { path: "new-appointment", loadChildren: () => import("../appointment/feature/new-appointment/new-appointment.module").then(m => m.NewAppointmentModule) }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavegationRoutingModule { }

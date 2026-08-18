import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: "", redirectTo: "appointments", pathMatch: "full"
  },
  {
    path: '',
    component: LayoutComponent, children: [
      {
        path: "appointments", loadChildren: () => import("../pages/appointments/appointments.module").then(m => m.AppointmentsModule)
      },
      {
        path: "new-appointment", loadChildren: () => import("../pages/appointments/features/new-appointment/new-appointment.module").then(m => m.NewAppointmentModule)
      },
      {
        path: "my-appointments", loadChildren: () => import("../pages/appointments/features/my-appointments/my-appointments.module").then(m => m.MyAppointmentsModule)
      },
      {
        path: "customers", loadChildren: () => import("../pages/customers/customers.module").then(m => m.CustomersModule)
      },
      {
        path: "new-customer", loadChildren: () => import("../pages/customers/features/new-customer/new-customer.module").then(m => m.NewCustomerModule)
      },
      {
        path: "whatsapp", loadChildren: () => import("../pages/whatsapp/whatsapp.module").then(m => m.WhatsappModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
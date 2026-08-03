import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewAppointmentRoutingModule } from './new-appointment-routing.module';
import { NewAppointmentComponent } from './new-appointment.component';
import { SharedModule } from "src/app/shared/shared.module";
import { NewAppointmentFormComponent } from './components/new-appointment-form/new-appointment-form.component';
import { NgZorroModule } from 'src/app/core/ng-zorro/ng-zorro.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NewAppointmentComponent,
    NewAppointmentFormComponent
  ],
  imports: [
    CommonModule,
    NewAppointmentRoutingModule,
    SharedModule,
    NgZorroModule,
    ReactiveFormsModule
]
})
export class NewAppointmentModule { }

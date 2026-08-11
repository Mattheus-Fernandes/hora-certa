import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewAppointmentRoutingModule } from './new-appointment-routing.module';
import { NewAppointmentComponent } from './new-appointment.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormNewAppointmentComponent } from './components/form-new-appointment/form-new-appointment.component';
import { NgZorroModule } from 'src/app/core/ng-zorro/ng-zorro.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NewAppointmentComponent,
    FormNewAppointmentComponent
  ],
  imports: [
    CommonModule,
    NewAppointmentRoutingModule,
    RouterModule,
    SharedModule,
    NgZorroModule,
    ReactiveFormsModule
  ]
})
export class NewAppointmentModule { }

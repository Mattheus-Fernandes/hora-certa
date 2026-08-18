import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAppointmentsRoutingModule } from './my-appointments-routing.module';
import { RouterModule } from '@angular/router';
import { NgZorroModule } from 'src/app/core/ng-zorro/ng-zorro.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyAppointmentsComponent } from './my-appointments.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MyAppointmentsComponent
  ],
  imports: [
    CommonModule,
    MyAppointmentsRoutingModule,
    RouterModule,
    SharedModule,
    NgZorroModule,
    ReactiveFormsModule
  ]
})
export class MyAppointmentsModule { }

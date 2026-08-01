import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { AppointmentComponent } from './appointment.component';
import { LucideIconsModule } from 'src/app/icons/lucide-icons.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AppointmentComponent
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule,
    LucideIconsModule,
    SharedModule
  ]
})
export class AppointmentModule { }

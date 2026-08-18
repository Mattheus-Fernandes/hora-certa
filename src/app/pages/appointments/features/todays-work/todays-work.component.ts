import { Component, inject, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { AppointmentService } from 'src/app/core/services/appointment.service';
import { AppointmentsList } from 'src/app/core/types/appointments-list.type';

@Component({
  selector: 'app-todays-work',
  templateUrl: './todays-work.component.html',
  styleUrls: ['./todays-work.component.scss']
})
export class TodaysWorkComponent implements OnInit {
  private readonly _appointmentsService = inject(AppointmentService)
  appointmentsList: AppointmentsList = []


  ngOnInit() {
    this.getAllAppointmentsToday()
  } 

  getAllAppointmentsToday() {
    this._appointmentsService.getAllAppointmentsToday()
      .pipe(
        take(1)
      )
      .subscribe((res: AppointmentsList) => this.appointmentsList = res)
  }
}

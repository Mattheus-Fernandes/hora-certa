import { Component, inject, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { AppointmentService } from 'src/app/core/services/appointment.service';
import { AppointmentsList } from 'src/app/core/types/appointments-list.type';

@Component({
  selector: 'app-reminds',
  templateUrl: './reminds.component.html',
  styleUrls: ['./reminds.component.scss']
})
export class RemindsComponent implements OnInit {

  private readonly _appointmentsService = inject(AppointmentService)
  appointmentsList: AppointmentsList = []

  ngOnInit() {
    this.getAllAppointmentsReminds()
  }

  private getAllAppointmentsReminds() {
    this._appointmentsService.getAllAppointmentsReminds()
      .pipe(
        take(1)
      )
      .subscribe((res: AppointmentsList) => this.appointmentsList = res)
  }
}

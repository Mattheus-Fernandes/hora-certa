import { Component, inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { take } from 'rxjs';
import { AppointmentService } from 'src/app/core/services/appointment.service';
import { AppointmentsList } from 'src/app/core/types/appointments-list.type';

@Component({
  selector: 'app-canceleds',
  templateUrl: './canceleds.component.html',
  styleUrls: ['./canceleds.component.scss']
})
export class CanceledsComponent implements OnInit {

  private readonly _appointmentsService = inject(AppointmentService)

  appointmentsList: AppointmentsList = []
  appointmentsListFiltered: AppointmentsList = []
  appointmentDate = new FormControl<Date | null>(new Date())
  nzStatus: '' | 'error' = ''

  ngOnInit() {
    this.getAllAppointmentsReminds()
  }

  private getAllAppointmentsReminds() {

    const month = new Date().getMonth() + 1
    const year = new Date().getFullYear()

    this._appointmentsService.getAllAppointmentsCanceleds(month.toString(), year.toString())
      .pipe(
        take(1)
      )
      .subscribe((res: AppointmentsList) => {
        this.appointmentsListFiltered = res
      })
  }

  btnFilter() {
    this.nzStatus = ""

    if (!this.appointmentDate.value) {
      this.nzStatus = "error"
      return
    }

    const month = Number(this.appointmentDate.value?.getMonth()) + 1
    const correctMonth = month < 10 ? `0${month}` : month.toString()
    const year = this.appointmentDate.value?.getFullYear().toString() as string

    this._appointmentsService.getAllAppointmentsCanceleds(correctMonth, year)
      .pipe(
        take(1)
      )
      .subscribe((res: AppointmentsList) => {
        this.appointmentsListFiltered = res
      })
  }

}

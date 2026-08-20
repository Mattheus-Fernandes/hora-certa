import { Component, inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { take } from 'rxjs';
import { AppointmentStatusEnum } from 'src/app/core/enums/appointments-status.enum';
import { AppointmentService } from 'src/app/core/services/appointment.service';
import { AppointmentsList } from 'src/app/core/types/appointments-list.type';
import { TransformDate } from 'src/app/core/utils/transform-date';

@Component({
  selector: 'app-completeds',
  templateUrl: './completeds.component.html',
  styleUrls: ['./completeds.component.scss']
})
export class CompletedsComponent implements OnInit {

  private readonly _appointmentsService = inject(AppointmentService)

  appointmentsList: AppointmentsList = []
  appointmentsListFiltered: AppointmentsList = []
  appointmentDate = new FormControl<Date | null>(new Date())
  nzStatus: '' | 'error' = ''

  ngOnInit() {
    this.getAllAppointmentsCompleted()
  }

  private getAllAppointmentsCompleted() {
    this._appointmentsService.getAllAppointmentsByStatus(AppointmentStatusEnum.COMPLETED, this.getMonthAndYear())
      .pipe(
        take(1)
      )
      .subscribe((res: AppointmentsList) => {
        this.appointmentsList = res
        this.appointmentsListFiltered = res
      })
  }

  btnFilter() {
    this.nzStatus = ""

    if (!this.appointmentDate.value) {
      this.nzStatus = "error"
      return
    }

    this._appointmentsService.getAllAppointmentsByStatus(AppointmentStatusEnum.COMPLETED, this.getMonthAndYear())
      .pipe(
        take(1)
      )
      .subscribe((res: AppointmentsList) => {
        this.appointmentsListFiltered = res
      })
  }

  private getMonthAndYear(): string {
    const month = Number(this.appointmentDate.value?.getMonth()) + 1
    const year = this.appointmentDate.value?.getFullYear()

    return TransformDate.apiFormat(String(month), String(year))
  }
}

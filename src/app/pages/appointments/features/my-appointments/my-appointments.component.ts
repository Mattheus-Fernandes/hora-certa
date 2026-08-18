import { Component, inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { take } from 'rxjs';
import { IFilterFullnameDate } from 'src/app/core/interfaces/filter-fullname-date.interface';
import { IFilterNameDate } from 'src/app/core/interfaces/filter-name-date.interface';
import { IFilterFullname } from 'src/app/core/interfaces/filter-fullaname.interface';
import { AppointmentService } from 'src/app/core/services/appointment.service';
import { AppointmentsList } from 'src/app/core/types/appointments-list.type';


@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.component.html',
  styleUrls: ['./my-appointments.component.scss']
})
export class MyAppointmentsComponent implements OnInit {

  private readonly _appointmentsService = inject(AppointmentService)

  appointmentsList: AppointmentsList = []

  appointmentDate = new FormControl<Date | null>(null)
  searchBar = new FormControl<string | null>("")
  nzStatus: '' | 'error' = ''

  ngOnInit() {
    this.getAllAppointments()
  }

  getAllAppointments() {
    this._appointmentsService.getAllAppointments()
      .pipe(take(1))
      .subscribe((res: AppointmentsList) => this.appointmentsList = res)
  }

  btnFilter() {
    this.nzStatus = ""

    const name = this.searchBar.value?.split(" ")[0]
    const lastname = this.searchBar.value?.split(" ")[1]
    const date = this.appointmentDate.value

    if (name === "" && date === null) {
      this.nzStatus = "error"
      return
    }

    //Conditions
    const FULLNAME_AND_DATE = name && lastname !== undefined && lastname !== "" && date
    const NAME_AND_DATE = name && !lastname && date
    const FULLNAME = name && lastname !== undefined && lastname !== "" && !date
    const ONLY_NAME = name && !lastname && !date
    const ONLY_DATE = !name && !lastname && date


    if (FULLNAME_AND_DATE) {
      const object: IFilterFullnameDate = {
        name,
        lastname,
        date
      }
      this.filterFullnameAndDate(object)
    }

    if (NAME_AND_DATE) {
      const object: IFilterNameDate = {
        name,
        date
      }
      this.filterNameAndDate(object)
    }

    if (FULLNAME) {
      const object: IFilterFullname = {
        name,
        lastname
      }
      this.filterSearchBarFullname(object)
    }

    if (ONLY_NAME) {
      this.filterOnlyName(name)
    }

    if (ONLY_DATE) {
      this.filterOnlyMonthAndYear(date)
    }
  }

  private filterFullnameAndDate(params: IFilterFullnameDate) {
    this._appointmentsService.getAppointmentsByFullnameAndDate(params)
      .pipe(
        take(1)
      )
      .subscribe()
  }

  private filterNameAndDate(params: IFilterNameDate) {
    this._appointmentsService.getAppointmentsByNameAndDate(params)
      .pipe(
        take(1)
      )
      .subscribe()
  }

  private filterSearchBarFullname(params: IFilterFullname) {
    this._appointmentsService.getAppointmentsByFullname(params)
      .pipe(
        take(1)
      )
      .subscribe()
  }

  private filterOnlyName(name: string) {
    this._appointmentsService.getAppointmentsByName(name)
      .pipe(
        take(1)
      )
      .subscribe()
  }

  private filterOnlyMonthAndYear(date: Date) {
    this._appointmentsService.getAppointmentsByMonthAndYear(date)
      .pipe(
        take(1)
      )
      .subscribe()
  }


}

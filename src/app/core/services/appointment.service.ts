import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IAppointment } from '../interfaces/appointment.interface';
import { Observable, of } from 'rxjs';
import { AppointmentsList } from '../types/appointments-list.type';
import { IFilterFullnameDate } from '../interfaces/filter-fullname-date.interface';
import { IFilterNameDate } from '../interfaces/filter-name-date.interface';
import { IFilterFullname } from '../interfaces/filter-fullaname.interface';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private readonly _url: string = "http://localhost:9138/appointments"
  private readonly _http = inject(HttpClient)

  newAppointment(payload: IAppointment): Observable<IAppointment> {
    return this._http.post<IAppointment>(`${this._url}`, payload)
  }

  getAllAppointments(): Observable<AppointmentsList> {
    return this._http.get<AppointmentsList>(this._url)
  }

  getAppointmentsByFullnameAndDate(params: IFilterFullnameDate): Observable<any> {
    return of(
      console.log(`Buscar pelo o nome completo e mês\n${params.name} ${params.lastname} - ${this.transformDate(params.date)}`)
    )
  }

  getAppointmentsByNameAndDate(params: IFilterNameDate): Observable<any> {
    return of(
      console.log(`Buscar somente pelo o nome e mês\n${params.name} - ${this.transformDate(params.date)}`)
    )
  }

  getAppointmentsByFullname(params: IFilterFullname): Observable<any> {
    return of(
      console.log(`Buscar pelo o nome completo\n${params.name} ${params.lastname}`)
    )
  }

  getAppointmentsByName(name: string): Observable<any> {
    return of(
      console.log(`Buscar somente pelo o nome\n${name}`)
    )
  }

  getAppointmentsByMonthAndYear(date: Date): Observable<any> {
    return of(
      console.log(`Buscar somente pelo o mês\n${this.transformDate(date)}`)
    )
  }

  private transformDate(date: Date): string {
    const month = date.getMonth() + 1
    const correctMonth = month < 10 ? `0${month}` : month
    const year = date.getFullYear()

    return `${correctMonth}/${year}`
  }

  getAllAppointmentsToday(): Observable<AppointmentsList> {
    return this._http.get<AppointmentsList>(`${this._url}/today`)
  }

  getAllAppointmentsReminds(): Observable<AppointmentsList> {
    return this._http.get<AppointmentsList>(`${this._url}/reminds`)
  }

  getAllAppointmentsConfirmeds(month: string, year: string): Observable<AppointmentsList> {
    return this._http.get<AppointmentsList>(`${this._url}/confirmed`, {
      params: {
        month,
        year
      }
    })
  }

  getAllAppointmentsCanceleds(month: string, year: string): Observable<AppointmentsList> {
    return this._http.get<AppointmentsList>(`${this._url}/canceled`, {
      params: {
        month,
        year
      }
    })
  }

}

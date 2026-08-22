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

  getAppointmentsByName(name: string): Observable<AppointmentsList> {
     return this._http.get<AppointmentsList>(`${this._url}/name`, {
      params: {
        name
      }
    })
  }

  getAppointmentsByMonthAndYear(date: string): Observable<AppointmentsList> {
    return this._http.get<AppointmentsList>(`${this._url}/month`, {
      params: {
        date
      }
    })
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

  getAllAppointmentsByStatus(status: string, date: string): Observable<AppointmentsList> {

    switch (status) {
      case "CONFIRMED":
        return this._http.get<AppointmentsList>(`${this._url}/confirmed`, {
          params: {
            date
          }
        })
      case "CANCELED":
        return this._http.get<AppointmentsList>(`${this._url}/canceled`, {
          params: {
            date
          }
        })
      case "COMPLETED":
        return this._http.get<AppointmentsList>(`${this._url}/completed`, {
          params: {
            date
          }
        })
      default:
        throw new Error(`Status de agendamento inválido: ${status}`);
    }

  }
}

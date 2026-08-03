import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IAppointment } from '../interfaces/appointment.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private readonly _url: string = "http://localhost:9138/appointments"

  private readonly _http = inject(HttpClient)

  newAppointment(payload: IAppointment): Observable<IAppointment> {
    return this._http.post<IAppointment>(`${this._url}`,  payload )
  }
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomersList } from '../types/customers-list.type';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url: string = 'http://localhost:4376/customers'

  private readonly _http = inject(HttpClient)

  getAllCustomers(): Observable<CustomersList> {
    return this._http.get<CustomersList>(this.url)
  }

}

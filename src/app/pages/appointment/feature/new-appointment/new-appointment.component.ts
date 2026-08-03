import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { IAppointment } from 'src/app/core/interfaces/appointment.interface';
import { CustomersList } from 'src/app/core/types/customers-list.type';
import { CustomerService } from 'src/app/core/services/customer.service';
import { AppointmentService } from 'src/app/core/services/appointment.service';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.scss']
})
export class NewAppointmentComponent implements OnInit {
  isVisible = false;
  isOkLoading = false;
  customerListRes!: CustomersList

  private readonly _customerService = inject(CustomerService)
  private readonly _appointmentService = inject(AppointmentService)

  ngOnInit(): void {
    this._customerService.getAllCustomers().subscribe((res: CustomersList) => this.customerListRes = res)
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  handlerSubmitAppoinment(payload: IAppointment) {
    console.log(payload)
    this._appointmentService.newAppointment(payload).subscribe()
  }
}

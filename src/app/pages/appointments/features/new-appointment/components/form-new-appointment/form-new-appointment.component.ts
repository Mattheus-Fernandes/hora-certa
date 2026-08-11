import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomersList } from 'src/app/core/types/customers-list.type';
import { KindServiceList } from 'src/app/core/types/kind-service-list.type';
import { IAppointmentForm } from '../../interfaces/appointment-form.interface';
import { IAppointment } from 'src/app/core/interfaces/appointment.interface';

@Component({
  selector: 'app-form-new-appointment',
  templateUrl: './form-new-appointment.component.html',
  styleUrls: ['./form-new-appointment.component.scss']
})
export class FormNewAppointmentComponent implements OnChanges {

  @Input() customersList: CustomersList = []
  @Input() servicesType: KindServiceList = []
  @Input() resetForm: number = 0

  @Output() formData = new EventEmitter<IAppointment>()

  appointmentForm: FormGroup<IAppointmentForm> = new FormGroup({
    customerId: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
    appointmentDate: new FormControl<Date | null>(null, { nonNullable: true, validators: Validators.required }),
    appointmentTime: new FormControl<Date | null>(null, { nonNullable: true, validators: Validators.required }),
    serviceName: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
    observation: new FormControl<string | null>(null)
  })

  ngOnChanges(changes: SimpleChanges) {
    if (changes['resetForm'] && !changes['resetForm'].firstChange) {
      this.appointmentForm.reset()
    }
  }

  btnHandlerForm() {
    const form = this.appointmentForm.getRawValue()

    const appointment = {
      customerId: form.customerId,
      appointmentDate: this.formatDate(form.appointmentDate),
      appointmentTime: this.formatTime(form.appointmentTime),
      serviceName: form.serviceName,
      observation: form.observation
    } as IAppointment

    this.formData.emit(appointment)
  }

  private formatDate(date: Date | null): string {
    if (!date) {
      return ''
    }

    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')

    return `${year}-${month}-${day}`
  }

  private formatTime(date: Date | null): string {
    if (!date) {
      return ''
    }

    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')

    return `${hours}:${minutes}`
  }

  get formIsValid(): boolean {
    return this.appointmentForm.valid
  }
}

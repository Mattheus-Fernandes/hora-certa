import { AfterViewInit, Component, ElementRef, EventEmitter, inject, Input, Output, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { IAppointment } from 'src/app/core/interfaces/appointment.interface';
import { CustomersList } from 'src/app/core/types/customers-list.type';
import { KindServiceList } from 'src/app/core/types/kind-service-list.type';

@Component({
  selector: 'app-new-appointment-form',
  templateUrl: './new-appointment-form.component.html',
  styleUrls: ['./new-appointment-form.component.scss']
})
export class NewAppointmentFormComponent {

  private readonly _message = inject(NzMessageService)

  @Input() customersList!: CustomersList
  @Output() closeModal = new EventEmitter<void>()
  @Output() formValue = new EventEmitter<IAppointment>()

  time = new Date()

  kindServiceList: KindServiceList = [
    { value: "Manutenção", title: "Manutenção" },
    { value: "Aplicação", title: "Aplicação" },
    { value: "Remoção", title: "Remoção" }
  ]

  step = 1
  invalidForm = false

  appointmentForm = new FormGroup({
    customerId: new FormControl<string | null>(null, {
      validators: [Validators.required]
    }),

    appointmentDate: new FormControl<Date | null>(null, {
      validators: [Validators.required]
    }),

    appointmentTime: new FormControl<Date | null>(null, {
      validators: [Validators.required]
    }),

    serviceName: new FormControl<string | null>(null, {
      validators: [Validators.required]
    }),

    observation: new FormControl<string>('')
  })

  nextStep() {
    if (this.step < 5) {
      this.step++
    } else {
      this.saveAppoinemnt()
    }
  }

  previousStep() {
    if (this.step > 1) {
      this.step--
    }
  }

  saveAppoinemnt() {

    this.invalidForm = false

    if (this.appointmentForm.invalid) {
      this.appointmentForm.markAllAsTouched()
      this.invalidForm = true
      this.createMessage("error", "Preencha os campos obrigatórios")

      return
    }

    const date = this.appointmentForm.value.appointmentDate as Date
    const time = this.appointmentForm.value.appointmentTime as Date

    const payload = {
      customerId: this.appointmentForm.value.customerId,
      appointmentDate: date.toISOString().split('T')[0],
      appointmentTime: time.toLocaleTimeString("en-GB", {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }),
      serviceName: this.appointmentForm.value.serviceName,
      observation: this.appointmentForm.value.observation
    }

    this.formValue.emit(payload as IAppointment)

    this.appointmentForm.reset()
    this.createMessage("success", "Agendamento realizado com sucesso")
  }

  createMessage(type: string, text: string): void {
    this._message.create(type, `${text}`);
  }

  get invalidCustomerId(): '' | 'error' {
    const control = this.appointmentForm.get('customerId');
    return control && control.invalid && control.touched ? 'error' : '';
  }

  get invalidAppointmentDate(): '' | 'error' {
    const control = this.appointmentForm.get('appointmentDate');
    return control && control.invalid && control.touched ? 'error' : '';
  }

  get invalidAppointmentTime(): '' | 'error' {
    const control = this.appointmentForm.get('appointmentTime');
    return control && control.invalid && control.touched ? 'error' : '';
  }

  get invalidServiceName(): '' | 'error' {
    const control = this.appointmentForm.get('serviceName');
    return control && control.invalid && control.touched ? 'error' : '';
  }
}


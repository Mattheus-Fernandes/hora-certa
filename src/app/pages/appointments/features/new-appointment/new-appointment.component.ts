import { Component, inject, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { IAppointment } from 'src/app/core/interfaces/appointment.interface';
import { AppointmentService } from 'src/app/core/services/appointment.service';
import { CustomerService } from 'src/app/core/services/customer.service';
import { CustomersList } from 'src/app/core/types/customers-list.type';
import { KindServiceList } from 'src/app/core/types/kind-service-list.type';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.scss']
})
export class NewAppointmentComponent implements OnInit {

  private readonly _customersService = inject(CustomerService)
  private readonly _appointmentService = inject(AppointmentService)

  customersList: CustomersList = []

  servicesType: KindServiceList = [
    { title: "Manutenção", value: "Manutenção" },
    { title: "Aplicação", value: "Aplicação" },
    { title: "Remoção", value: "Remoção" },
  ]

  hasError: boolean = false
  successfully: boolean = false
  text!: string 
  propStyle!: string
  iconName: "circle-check" | "circle-x" = "circle-check"
  resetForm = 0

  ngOnInit(): void {
    this.getAllCustomers()
  }

  getAllCustomers() {
    this._customersService.getAllCustomers()
      .pipe(take(1))
      .subscribe((res: CustomersList) => this.customersList = res)
  }

  handlerNewAppointment(payload: IAppointment) {
    this.hasError = false
    this.successfully = false
    this.text = ""

    this._appointmentService.newAppointment(payload)
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.successfully = true
          this.hasError = false
          this.text = "Agendamento salvo com sucesso"
          this.propStyle = "success"
          this.iconName = "circle-check"
          this.resetForm++
        },
        error: (e) => {
          //Depois fazer tratamento de erro com a mensagem vindo do server
          this.hasError = true
          this.successfully = false
          this.text = "Ocorreu um erro, desculpe!"
          this.propStyle = "error"
          this.iconName = "circle-x"
        }, 
        complete: () => {

        }
      })

      setTimeout(() => {
        this.successfully = false
        this.hasError = false
      }, 3000)
  }
}

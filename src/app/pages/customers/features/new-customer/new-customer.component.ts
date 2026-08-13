import { Component, inject, } from '@angular/core';
import { take } from 'rxjs';
import { ICustomerBodyForm } from 'src/app/core/interfaces/customer/customer-body-form.interface';
import { CustomerService } from 'src/app/core/services/customer.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent {

  private readonly _customersService = inject(CustomerService)

  hasError: boolean = false
  successfully: boolean = false
  text!: string
  propStyle!: string
  iconName: "circle-check" | "circle-x" = "circle-check"
  resetForm = 0

  handlerNewAppointment(payload: ICustomerBodyForm) {
    this.hasError = false
        this.successfully = false
        this.text = ""
    
        this._customersService.newCustomer(payload)
          .pipe(take(1))
          .subscribe({
            next: () => {
              this.successfully = true
              this.hasError = false
              this.text = "Cliente salvo com sucesso"
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


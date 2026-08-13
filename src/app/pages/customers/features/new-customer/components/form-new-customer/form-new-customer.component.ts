import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICustomerForm } from '../../../../../../core/interfaces/customer/customer-form.interface';
import { ICustomerBodyForm } from 'src/app/core/interfaces/customer/customer-body-form.interface';

@Component({
  selector: 'app-form-new-customer',
  templateUrl: './form-new-customer.component.html',
  styleUrls: ['./form-new-customer.component.scss']
})
export class FormNewCustomerComponent implements OnChanges {

  @Input() resetForm = 0

  @Output() formData = new EventEmitter<ICustomerBodyForm>()


  customerForm: FormGroup<ICustomerForm> = new FormGroup({
    name: new FormControl<string>("", { nonNullable: true, validators: Validators.required }),
    lastname: new FormControl<string>("", { nonNullable: true, validators: Validators.required }),
    email: new FormControl<string>("", { nonNullable: true, validators: Validators.required }),
    phone: new FormControl<string>("", { nonNullable: true, validators: Validators.required }),
    observation: new FormControl<string | null>(null)
  })

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['resetForm'] && !changes['resetForm'].firstChange) {
      this.customerForm.reset()
    }
  }

  btnHandlerForm() {
    const form = this.customerForm.getRawValue()

    this.formData.emit(form)
  }

  get formIsValid(): boolean {
    return this.customerForm.valid
  }
}

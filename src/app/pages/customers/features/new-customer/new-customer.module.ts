import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewCustomerRoutingModule } from './new-customer-routing.module';
import { NewCustomerComponent } from './new-customer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/app/core/ng-zorro/ng-zorro.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormNewCustomerComponent } from './components/form-new-customer/form-new-customer.component';
import {
  NgxMaskDirective,
  NgxMaskPipe,
  provideEnvironmentNgxMask
} from 'ngx-mask';



@NgModule({
  declarations: [
    NewCustomerComponent,
    FormNewCustomerComponent
  ],
  imports: [
    CommonModule,
    NewCustomerRoutingModule,
    SharedModule,
    NgZorroModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers:[
        provideEnvironmentNgxMask(),
  ]
})
export class NewCustomerModule { }

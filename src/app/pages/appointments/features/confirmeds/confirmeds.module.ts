import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmedsRoutingModule } from './confirmeds-routing.module';
import { ConfirmedsComponent } from './confirmeds.component';
import { NgZorroModule } from 'src/app/core/ng-zorro/ng-zorro.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ConfirmedsComponent
  ],
  imports: [
    CommonModule,
    ConfirmedsRoutingModule,
    SharedModule,
    NgZorroModule,
    ReactiveFormsModule
  ]
})
export class ConfirmedsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompletedsRoutingModule } from './completeds-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/app/core/ng-zorro/ng-zorro.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CompletedsComponent } from './completeds.component';


@NgModule({
  declarations: [
    CompletedsComponent
  ],
  imports: [
    CommonModule,
    CompletedsRoutingModule,
    SharedModule,
    NgZorroModule,
    ReactiveFormsModule
  ]
})
export class CompletedsModule { }

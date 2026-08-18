import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanceledsRoutingModule } from './canceleds-routing.module';
import { CanceledsComponent } from './canceleds.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/app/core/ng-zorro/ng-zorro.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CanceledsComponent
  ],
  imports: [
    CommonModule,
    CanceledsRoutingModule,
    SharedModule,
    NgZorroModule,
    ReactiveFormsModule
  ]
})
export class CanceledsModule { }

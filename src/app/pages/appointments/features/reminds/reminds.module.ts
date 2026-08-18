import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemindsRoutingModule } from './reminds-routing.module';
import { RemindsComponent } from './reminds.component';
import { NgZorroModule } from 'src/app/core/ng-zorro/ng-zorro.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RemindsComponent
  ],
  imports: [
    CommonModule,
    RemindsRoutingModule,
    SharedModule,
    NgZorroModule
  ]
})
export class RemindsModule { }

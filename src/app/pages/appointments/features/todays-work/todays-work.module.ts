import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodaysWorkRoutingModule } from './todays-work-routing.module';
import { TodaysWorkComponent } from './todays-work.component';
import { NgZorroModule } from 'src/app/core/ng-zorro/ng-zorro.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TodaysWorkComponent
  ],
  imports: [
    CommonModule,
    TodaysWorkRoutingModule,
    SharedModule,
    NgZorroModule,
  ]
})
export class TodaysWorkModule { }

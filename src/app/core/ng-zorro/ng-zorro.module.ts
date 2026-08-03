import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzMessageModule } from 'ng-zorro-antd/message';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzSelectModule,
    NzDatePickerModule,
    NzTimePickerModule,
    NzInputModule,
    NzButtonModule,
    NzModalModule,
    NzStepsModule,
    NzMessageModule
    
  ],
  exports: [
    NzSelectModule,
    NzDatePickerModule,
    NzTimePickerModule,
    NzInputModule,
    NzButtonModule,
    NzModalModule,
    NzStepsModule,
    NzMessageModule
  ]
})
export class NgZorroModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  LucideAngularModule, 
  Webhook,
  LoaderCircle,
  AlarmClockCheck,
  CalendarPlus,
  UserPlus,
  CalendarCheck2,
  CalendarDays,
  SquareUser,
  Settings
} from 'lucide-angular';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LucideAngularModule.pick({
      Webhook,
      LoaderCircle,
      AlarmClockCheck,
      CalendarPlus,
      UserPlus,
      CalendarCheck2,
      CalendarDays,
      SquareUser,
      Settings
    })
  ],
  exports:[
    LucideAngularModule
  ]
})
export class LucideIconsModule { }

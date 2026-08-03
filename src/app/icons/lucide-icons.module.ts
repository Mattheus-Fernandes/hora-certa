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
  Settings,
  Milestone,
  ArrowLeft,
  CalendarPlus2,
  CalendarCheck,
  CalendarX2,
  Calendar1,
  BookCheck,
  BellRing,
  CalendarSync,
  CalendarCog,
  CalendarMinus,
  Dot,
  X
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
      Settings,
      Milestone,
      ArrowLeft,
      CalendarPlus2,
      CalendarCheck,
      CalendarX2,
      Calendar1,
      BookCheck,
      BellRing,
      CalendarSync,
      CalendarCog,
      CalendarMinus,
      Dot,
      X
    })
  ],
  exports:[
    LucideAngularModule
  ]
})
export class LucideIconsModule { }

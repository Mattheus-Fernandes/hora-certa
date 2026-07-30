import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  LucideAngularModule, 
  Webhook,
  LoaderCircle
} from 'lucide-angular';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LucideAngularModule.pick({
      Webhook,
      LoaderCircle
    })
  ],
  exports:[
    LucideAngularModule
  ]
})
export class LucideIconsModule { }

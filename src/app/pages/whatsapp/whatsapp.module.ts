import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhatsappRoutingModule } from './whatsapp-routing.module';
import { WhatsappComponent } from './whatsapp.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    WhatsappComponent
  ],
  imports: [
    CommonModule,
    WhatsappRoutingModule,
    SharedModule
  ]
})
export class WhatsappModule { }

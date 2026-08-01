import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavegationRoutingModule } from './navegation-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavegationComponent } from './navegation.component';


@NgModule({
  declarations: [
    NavegationComponent
  ],
  imports: [
    CommonModule,
    NavegationRoutingModule,
    SharedModule
  ]
})
export class NavegationModule { }

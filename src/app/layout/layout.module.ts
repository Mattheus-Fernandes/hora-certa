import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { FastAccessComponent } from './components/fast-access/fast-access.component';
import { RedirectMenuComponent } from './components/redirect-menu/redirect-menu.component';
import { QuickActionCardComponent } from './components/quick-action-card/quick-action-card.component';



@NgModule({
  declarations: [
    LayoutComponent,
    FastAccessComponent,
    RedirectMenuComponent,
    QuickActionCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }

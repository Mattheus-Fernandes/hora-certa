import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnippingLoadingComponent } from './snipping-loading/snipping-loading.component';
import { LucideIconsModule } from '../icons/lucide-icons.module';
import { HeaderComponent } from './header/header.component';
import { IdentificationPageComponent } from './identification-page/identification-page.component';
import { RouterModule } from '@angular/router';
import { CardNavegationComponent } from './card-navegation/card-navegation.component';
import { NgZorroModule } from '../core/ng-zorro/ng-zorro.module';
import { ButtonComponent } from './button/button.component';
import { MessageFormComponent } from './message-form/message-form.component';



@NgModule({
  declarations: [
    SnippingLoadingComponent,
    HeaderComponent,
    IdentificationPageComponent,
    CardNavegationComponent,
    ButtonComponent,
    MessageFormComponent
  ],
  imports: [
    CommonModule,
    LucideIconsModule,
    RouterModule,
    NgZorroModule
],
  exports: [
    SnippingLoadingComponent,
    LucideIconsModule,
    IdentificationPageComponent,
    HeaderComponent,
    CardNavegationComponent,
    ButtonComponent,
    MessageFormComponent
  ]
})
export class SharedModule { }

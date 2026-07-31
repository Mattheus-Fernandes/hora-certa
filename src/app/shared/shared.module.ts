import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnippingLoadingComponent } from './snipping-loading/snipping-loading.component';
import { LucideIconsModule } from '../icons/lucide-icons.module';



@NgModule({
  declarations: [
    SnippingLoadingComponent
  ],
  imports: [
    CommonModule,
    LucideIconsModule
  ],
  exports: [
    SnippingLoadingComponent,
    LucideIconsModule
  ]
})
export class SharedModule { }

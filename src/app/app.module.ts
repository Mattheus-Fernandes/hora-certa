import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pt_BR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

registerLocaleData(pt);

const ngZorroConfig: NzConfig = {
  theme: {
     primaryColor: '#172554'
  }
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: pt_BR },
     { provide: NZ_CONFIG, useValue:  ngZorroConfig  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

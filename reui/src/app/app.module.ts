import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { KyeeModule } from 'portalface';
import { CommonWidgetsModule } from 'portalface/widgets';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpUtil } from './general/util/httpUtil.service';
import { ReHeaderModule } from './re-header/re-header.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    KyeeModule,
    CommonWidgetsModule,
    ReHeaderModule
  ],
  exports: [
  ],
  providers: [ HttpClientModule, HttpUtil],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AlarmModule } from './alarm/alarm.module';

@NgModule({
  declarations: [
    AppComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AlarmModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

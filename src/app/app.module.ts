import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherModule } from './teacher/teacher.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HolidayModule } from './holiday/holiday.module';




@NgModule({
  declarations: [
    AppComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TeacherModule,
    FontAwesomeModule,
    HolidayModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

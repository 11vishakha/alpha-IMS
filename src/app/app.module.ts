import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentRoutingModule } from './student/student-routing.module';
import { TeacherRoutingModule } from './teacher/teacher-routing.module';
import { HolidayRoutingModule } from './holiday/holiday-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EventRoutingModule } from './event/event-routing.module';
import { ExamsRoutingModule } from './exams/exams-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentRoutingModule,
    TeacherRoutingModule,
    HolidayRoutingModule,
    FontAwesomeModule,
    EventRoutingModule,
    ExamsRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

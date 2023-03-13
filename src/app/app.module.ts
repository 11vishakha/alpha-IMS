import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { StudentRoutingModule } from './student/student-routing.module';
import { TeacherRoutingModule } from './teacher/teacher-routing.module';
import { HolidayRoutingModule } from './holiday/holiday-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EventRoutingModule } from './event/event-routing.module';
import { ExamsRoutingModule } from './exams/exams-routing.module';
=======
import { TeacherModule } from './teacher/teacher.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HolidayModule } from './holiday/holiday.module';


>>>>>>> 3416b333ce2962bbc4739a9845026117d7d0031c


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    
=======
    HolidayComponent,
    AddHolidayComponent,
    FeesComponent,
    AddFeesComponent,
    EditFeesComponent,
  
>>>>>>> 3416b333ce2962bbc4739a9845026117d7d0031c
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    StudentRoutingModule,
    TeacherRoutingModule,
    HolidayRoutingModule,
    FontAwesomeModule,
    EventRoutingModule,
    ExamsRoutingModule,
=======
    TeacherModule,
    FontAwesomeModule,
    HolidayModule
  
>>>>>>> 3416b333ce2962bbc4739a9845026117d7d0031c
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

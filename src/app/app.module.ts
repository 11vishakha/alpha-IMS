import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { DepartmentModule } from './department/department.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AccountsModule } from './accounts/accounts.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TeacherModule } from './teacher/teacher.module';
import { StudentModule } from './student/student.module';
// import { HolidayModule } from './holiday/holiday.module';
import { FeesComponent } from './fees/fees.component';
import { HolidayComponent } from './holiday/holiday.component';
// import { MatIconModule } from '@angular/material/icon';
=======
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

>>>>>>> 230f7711a214df3090312c299a1833038d3d101e

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    SideNavComponent,
    HeaderComponent,
    FeesComponent,
    HolidayComponent
    
=======
<<<<<<< HEAD
    
=======
    HolidayComponent,
    AddHolidayComponent,
    FeesComponent,
    AddFeesComponent,
    EditFeesComponent,
  
>>>>>>> 3416b333ce2962bbc4739a9845026117d7d0031c
  
>>>>>>> 230f7711a214df3090312c299a1833038d3d101e
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
    StudentModule,
    ReactiveFormsModule,
    MaterialModule,
    AccountsModule,
    RouterModule,
    FormsModule,
    DepartmentModule,
    
  
>>>>>>> 3416b333ce2962bbc4739a9845026117d7d0031c
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

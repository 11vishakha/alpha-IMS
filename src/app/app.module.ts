import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentModule } from './department/department.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HolidayComponent } from './holiday/holiday.component';
import { AccountsModule } from './accounts/accounts.module';
import { TeacherModule } from './teacher/teacher.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { EventModule } from './event/event.module';
import { ExamsModule } from './exams/exams.module';
import { StudentModule } from './student/student.module';
import { FeesComponent } from './fees/fees.component';





@NgModule({
  declarations: [
    AppComponent,
    HolidayComponent,
    HeaderComponent,
    SideNavComponent,
    FeesComponent
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TeacherModule,
    FontAwesomeModule,
    AccountsModule,
    DepartmentModule,
    AuthenticationModule,
    EventModule,
    ExamsModule,
    StudentModule

  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

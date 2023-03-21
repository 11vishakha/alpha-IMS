import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { SubjectsRoutingModule } from './subjects/subjects-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from './material/material.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { StudentModule } from './student/student.module';

import { TeacherModule } from './teacher/teacher.module';
import { DepartmentModule } from './department/department.module';
// import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountsModule } from './accounts/accounts.module';
// import { DepartmentComponent } from './department/department.component';
import { SubjectsModule } from './subjects/subjects.module';
import { AuthenticationModule } from './authentication/authentication.module';
import {HttpClientModule} from '@angular/common/http'
import { FormControl, ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    SubjectsRoutingModule,
    FontAwesomeModule,
    MaterialModule,
    AccountsModule,
    BrowserAnimationsModule,
    MaterialModule,
    TeacherModule,
    StudentModule,
    SubjectsModule,
    DepartmentModule,
    AuthenticationModule,
    HttpClientModule,
    
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

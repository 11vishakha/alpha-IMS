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
import { AccountsModule } from './accounts/accounts.module';
import { TeacherModule } from './teacher/teacher.module';
import { StudentModule } from './student/student.module';
import { SubjectsModule } from './subjects/subjects.module';
import { DepartmentRoutingModule } from './department/department-routing.module';

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
    DepartmentRoutingModule,
    TeacherModule,
    StudentModule,
    SubjectsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

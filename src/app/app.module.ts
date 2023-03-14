import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { HolidayModule } from './holiday/holiday.module';
import { FeesComponent } from './fees/fees.component';
// import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    FeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TeacherModule,
    FontAwesomeModule,
    StudentModule,
    ReactiveFormsModule,
    MaterialModule,
    AccountsModule,
    RouterModule,
    FormsModule,
    DepartmentModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

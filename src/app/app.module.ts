import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { StudentModule } from './student/student.module';
import { DepartmentComponent } from './department/department.component';

import { TeacherModule } from './teacher/teacher.module';
import { DepartmentModule } from './department/department.module';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountsModule } from './accounts/accounts.module';




@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    SideNavComponent,
    HeaderComponent
    
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    StudentModule,
    TeacherModule,
    DepartmentModule,
    AccountsModule,
    BrowserAnimationsModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

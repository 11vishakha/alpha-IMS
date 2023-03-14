import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentModule } from './department/department.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { StudentModule } from './student/student.module';
import { DepartmentComponent } from './department/department.component';
import { AddFeesComponent } from './add-fees/add-fees.component';
import { AddHolidayComponent } from './add-holiday/add-holiday.component';
import { EditFeesComponent } from './edit-fees/edit-fees.component';
import { FeesComponent } from './fees/fees.component';
import { HolidayComponent } from './holiday/holiday.component';




@NgModule({
  declarations: [
    AppComponent,
    HolidayComponent,
    AddHolidayComponent,
    FeesComponent,
    AddFeesComponent,
    EditFeesComponent,
    
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TeacherModule,
    FontAwesomeModule,
    DepartmentModule,
    StudentModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

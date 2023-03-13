import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherModule } from './teacher/teacher.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HolidayComponent } from './holiday/holiday.component';
import { AddHolidayComponent } from './add-holiday/add-holiday.component';
import { FeesComponent } from './fees/fees.component';
import { AddFeesComponent } from './add-fees/add-fees.component';
import { EditFeesComponent } from './edit-fees/edit-fees.component';




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
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

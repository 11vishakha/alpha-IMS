import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HolidayRoutingModule } from './holiday-routing.module';
import { HolidayComponent } from './holiday.component';
// import { AddHolidayComponent } from './add-holiday/add-holiday.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    HolidayComponent,
    // AddHolidayComponent,
    // PageNotFoundComponent,
    // HomeComponent
  ],
  imports: [
    CommonModule,
    // HolidayRoutingModule,
    RouterModule,
    MaterialModule,
    FontAwesomeModule
  ]
})
export class HolidayModule { }

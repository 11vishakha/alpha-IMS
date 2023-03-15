import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { SubjectsRoutingModule } from './subjects/subjects-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TableComponent } from './table/table.component';
import { LibraryComponent } from './library/library.component';
import { HolidayComponent } from './holiday/holiday.component';
import { FeesComponent } from './fees/fees.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    LibraryComponent,
    HolidayComponent,
    FeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    SubjectsRoutingModule,
    FontAwesomeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { SubjectsRoutingModule } from './subjects/subjects-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TableComponent } from './table/table.component';
import { LibraryComponent } from './library/library.component';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    TableComponent,
    LibraryComponent,
=======
  
  
>>>>>>> 9fc305344a438270247ca7a1d27e6f633ad7d09f
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

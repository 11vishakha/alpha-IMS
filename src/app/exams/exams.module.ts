import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamsRoutingModule } from './exams-routing.module';
import { ExamsComponent } from './exams.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    ExamsComponent
  ],
  imports: [
    CommonModule,
    ExamsRoutingModule,
    FontAwesomeModule
  ]
})
export class ExamsModule { }

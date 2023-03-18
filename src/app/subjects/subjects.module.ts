import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectsRoutingModule } from './subjects-routing.module';
import { SubjectsComponent } from './subjects.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectAddComponent } from './subject-add/subject-add.component';
import { SubjectEditComponent } from './subject-edit/subject-edit.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    SubjectsComponent,
    SubjectListComponent,
    SubjectAddComponent,
    SubjectEditComponent
  ],
  imports: [
    CommonModule,
    SubjectsRoutingModule,
    FontAwesomeModule
  ]
})
export class SubjectsModule { }

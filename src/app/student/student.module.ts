import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentViewComponent } from './student-view/student-view.component';
 
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StudentEditComponent } from './student-edit/student-edit.component';


@NgModule({
  declarations: [
    StudentComponent,
    StudentListComponent,
    StudentAddComponent,
    StudentViewComponent,
    StudentEditComponent, 
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FontAwesomeModule
  ]
})
export class StudentModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherAddComponent } from './teacher-add/teacher-add.component';
import { TeacherViewComponent } from './teacher-view/teacher-view.component';
import { TeacherEditComponent } from './teacher-edit/teacher-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TeacherComponent,
    TeacherListComponent,
    TeacherAddComponent,
    TeacherViewComponent,
    TeacherEditComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    FontAwesomeModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class TeacherModule { }

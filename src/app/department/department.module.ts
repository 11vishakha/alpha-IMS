import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './department.component';
import { DeptAddComponent } from './dept-add/dept-add.component';
import { DeptEditComponent } from './dept-edit/dept-edit.component';
import { DeptListComponent } from './dept-list/dept-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
   
    DeptAddComponent,
    DeptEditComponent,
    DeptListComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    FontAwesomeModule
  ]
})
export class DepartmentModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department.component';
import { DeptAddComponent } from './dept-add/dept-add.component';
import { DeptEditComponent } from './dept-edit/dept-edit.component';
import { DeptListComponent } from './dept-list/dept-list.component';

const routes: Routes = [{ path: '', 
  children:[
  {
    path:'dept-add',component:DeptAddComponent,
  },
  {
    path:'dept-edit',component:DeptEditComponent,
  },
  {
    path:'dept-list',component:DeptListComponent,
    
  }
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }

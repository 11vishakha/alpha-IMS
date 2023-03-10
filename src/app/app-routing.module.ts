import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolidayComponent } from './holiday/holiday.component';


const routes: Routes = [{ path: 'teacher', loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule) },
{ path: 'holiday', loadChildren: () => import('./holiday/holiday.module').then(m => m.HolidayModule) }];

const routes: Routes = [{ path: 'department', loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule) }, 
                        { path: 'accounts', loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

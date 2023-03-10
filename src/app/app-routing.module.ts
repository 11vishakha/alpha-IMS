import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolidayComponent } from './holiday/holiday.component';

const routes: Routes = [{ path: 'teacher', loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule) },
{ path: 'holiday', loadChildren: () => import('./holiday/holiday.module').then(m => m.HolidayModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolidayComponent } from './holiday/holiday.component';


const routes: Routes = [
  {path:'student', loadChildren: ()=>import('./student/student.module').then(m=>m.StudentModule)},
  { path: 'teacher', loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule) },
{ path: 'holiday', loadChildren: () => import('./holiday/holiday.module').then(m => m.HolidayModule) },
{path:'events' ,loadChildren:()=> import('./event/event.module').then(m=>m.EventModule)},
  { path: 'exams', loadChildren: () => import('./exams/exams.module').then(m => m.ExamsModule) }];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

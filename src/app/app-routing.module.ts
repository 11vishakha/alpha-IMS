import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFeesComponent } from './add-fees/add-fees.component';
import { AddHolidayComponent } from './add-holiday/add-holiday.component';
import { EditFeesComponent } from './edit-fees/edit-fees.component';
import { FeesComponent } from './fees/fees.component';
import { HolidayComponent } from './holiday/holiday.component';


<<<<<<< HEAD
// const routes: Routes = [{ path: 'teacher', loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule) },
// { path: 'holiday', loadChildren: () => import('./holiday/holiday.module').then(m => m.HolidayModule) }];

const routes: Routes = [{ path: 'department', loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule) }, 
                        { path: 'accounts', loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule) },
                        { path: 'teacher', loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule) },
                        {path:'holiday',component:HolidayComponent},
                        {path:'add-holiday',component:AddHolidayComponent},
                        {path:'fees',component:FeesComponent},
                        {path:'add-fees',component:AddFeesComponent},
                        {path:'edit-fees',component:EditFeesComponent},
                        { path: 'authentication', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) }
                      ];
=======
<<<<<<< HEAD
const routes: Routes = [
  {path:'student', loadChildren: ()=>import('./student/student.module').then(m=>m.StudentModule)},
  { path: 'teacher', loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule) },
{ path: 'holiday', loadChildren: () => import('./holiday/holiday.module').then(m => m.HolidayModule) },
{path:'events' ,loadChildren:()=> import('./event/event.module').then(m=>m.EventModule)},
  { path: 'exams', loadChildren: () => import('./exams/exams.module').then(m => m.ExamsModule) }];
=======
const routes: Routes = [{ path: 'teacher', loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule) },
{ path: 'holiday', loadChildren: () => import('./holiday/holiday.module').then(m => m.HolidayModule) }];
>>>>>>> 3416b333ce2962bbc4739a9845026117d7d0031c
>>>>>>> 230f7711a214df3090312c299a1833038d3d101e

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

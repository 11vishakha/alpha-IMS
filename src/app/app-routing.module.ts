import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { LibraryComponent } from './library/library.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'Subjects',
    loadChildren: () =>
      import('./subjects/subjects.module').then((m) => m.SubjectsModule),
  },
  {
    path:'table', component:TableComponent
  },
  {
    path:'library', component:LibraryComponent
  }
];
=======
import { HolidayComponent } from './holiday/holiday.component';


const routes: Routes = [
  { path: 'teacher', loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule) },
{ path: 'holiday', loadChildren: () => import('./holiday/holiday.module').then(m => m.HolidayModule) }];


>>>>>>> 9fc305344a438270247ca7a1d27e6f633ad7d09f

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

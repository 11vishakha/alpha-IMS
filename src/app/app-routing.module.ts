import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFeesComponent } from './add-fees/add-fees.component';
import { AddHolidayComponent } from './add-holiday/add-holiday.component';
import { EditFeesComponent } from './edit-fees/edit-fees.component';
import { FeesComponent } from './fees/fees.component';
import { HolidayComponent } from './holiday/holiday.component';


const routes: Routes = [{ path: 'teacher', loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule) },
{ path: 'holiday', loadChildren: () => import('./holiday/holiday.module').then(m => m.HolidayModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

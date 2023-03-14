import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFeesComponent } from './add-fees/add-fees.component';
import { AddHolidayComponent } from './add-holiday/add-holiday.component';
import { EditFeesComponent } from './edit-fees/edit-fees.component';
import { FeesComponent } from './fees/fees.component';
import { HolidayComponent } from './holiday/holiday.component';


const routes: Routes = [{ path: 'teacher', loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule) },
{path:'department',loadChildren: () => import('./department/department.module').then(m=>m.DepartmentModule)},
{path:'holiday',component:HolidayComponent},
{path:'add-holiday',component:AddHolidayComponent},
{path:'fees',component:FeesComponent},
{path:'add-fees',component:AddFeesComponent},
{path:'edit-fees',component:EditFeesComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

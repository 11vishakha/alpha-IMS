import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFeesComponent } from './add-fees/add-fees.component';
import { AddHolidayComponent } from './add-holiday/add-holiday.component';
import { EditFeesComponent } from './edit-fees/edit-fees.component';
import { FeesComponent } from './fees/fees.component';
import { HolidayComponent } from './holiday/holiday.component';
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
  {path:'holiday',component:HolidayComponent},
{path:'add-holiday',component:AddHolidayComponent},
{path:'fees',component:FeesComponent},
{path:'add-fees',component:AddFeesComponent},
{path:'edit-fees',component:EditFeesComponent},
  {
    path:'table', component:TableComponent
  },
  {
    path:'library', component:LibraryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

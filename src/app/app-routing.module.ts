import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


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
    path: 'department',
    loadChildren:()=>
    import ('./department/department.module').then((m)=>m.DepartmentModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';

const routes: Routes = [{ path: 'dashboard', component:DashboardComponent , children:[{path:'admin-dashboard',component:AdminDashboardComponent},
{
  path:'student-dashboard', component:StudentDashboardComponent
},
{
  path:'teacher-dashboard',component:TeacherDashboardComponent
}
]   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

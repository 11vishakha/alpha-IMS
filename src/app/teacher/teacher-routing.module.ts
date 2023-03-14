import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TeacherAddComponent } from './teacher-add/teacher-add.component';
import { TeacherEditComponent } from './teacher-edit/teacher-edit.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherViewComponent } from './teacher-view/teacher-view.component';
import { TeacherComponent } from './teacher.component';

const routes: Routes = [{ path: '',
 children:[{path:'teacher-list',component:TeacherListComponent},                         
{path:'teacher-add',component:TeacherAddComponent},
{path:'teacher-view',component:TeacherViewComponent},
{path:'teacher-edit',component:TeacherEditComponent},
// {path:"**",component:PageNotFoundComponent}
]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { StudentComponent } from './student.component';


const routes: Routes = [{
    path:'' ,component:StudentComponent,
   children:[
    {
        path: 'student-add', component: StudentAddComponent
    },
    {
        path: 'student-view', component: StudentViewComponent
    },
    {
        path: 'student-edit', component: StudentEditComponent
    },
    {
        path:'student-list', component:StudentListComponent
    },
    {
        path:'**' ,component:PageNotFoundComponent
    }

    ]
}
   
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class StudentRoutingModule { }

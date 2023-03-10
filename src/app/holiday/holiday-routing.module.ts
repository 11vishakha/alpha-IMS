import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHolidayComponent } from './add-holiday/add-holiday.component';
import { HolidayComponent } from './holiday.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{path:' ',component:HolidayComponent},
{path:'add-holiday',component:AddHolidayComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HolidayRoutingModule { }

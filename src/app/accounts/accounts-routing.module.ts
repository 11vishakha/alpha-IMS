import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts.component';
import { AddExpensesComponent } from './add-expenses/add-expenses.component';
import { AddFeesComponent } from './add-fees/add-fees.component';
import { AddSalaryComponent } from './add-salary/add-salary.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { FeesCollectionComponent } from './fees-collection/fees-collection.component';
import { SalaryComponent } from './salary/salary.component';

const routes: Routes = [{ path: '',
  children:[
    {
      path:'fees-collection', component:FeesCollectionComponent
    },
    {
      path:'expenses',component:ExpensesComponent
    },
    {
      path:'salary',component:SalaryComponent
    },
    {
      path:'add-salary',component:AddSalaryComponent
    },
    {
      path:'add-fees',component:AddFeesComponent
    },
    {
      path:'add-expenses',component:AddExpensesComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }

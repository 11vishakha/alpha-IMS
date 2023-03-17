import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{ path: '', component: AuthenticationComponent,
  children:[
    {
      path:'auth-login',component:LoginComponent
    },
    {
      path:'auth-register',component:RegisterComponent
    },
    {
      path:'auth-forgetpass',component:ForgetPasswordComponent
    },
    {
      path:'auth-errorpage',component:ErrorPageComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }

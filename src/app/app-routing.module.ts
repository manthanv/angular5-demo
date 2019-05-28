import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import {AuthGuard} from './guard/auth.guard'
import {LoginComponent} from './component/login/login.component'
 
const routes: Routes = [
  {
    path:"",component:HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"login",component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

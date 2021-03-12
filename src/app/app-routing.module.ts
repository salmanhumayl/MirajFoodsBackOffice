import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService  } from './auth-guard.service';

import {OrderlistComponent} from 'src/app/components/orderlist/orderlist.component';
import {dashboardComponent} from 'src/app/components/dashboard/dashboard.component';
import {VieworderComponent} from 'src/app/components/vieworder/vieworder.component'
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'dashboard',component:dashboardComponent,canActivate:[AuthGuardService]},
  {path:'orders',component:OrderlistComponent,canActivate:[AuthGuardService]},
  {path:'ViewOrder/:id',component:VieworderComponent,canActivate:[AuthGuardService]},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

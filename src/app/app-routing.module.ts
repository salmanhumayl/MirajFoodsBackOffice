import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {OrderlistComponent} from 'src/app/components/orderlist/orderlist.component';
import {dashboardComponent} from 'src/app/components/dashboard/dashboard.component';
import {VieworderComponent} from 'src/app/components/vieworder/vieworder.component'

const routes: Routes = [
  {path:'dashboard',component:dashboardComponent},
  {path:'orders',component:OrderlistComponent},

  {path:'ViewOrder/:id',component:VieworderComponent},

  {path:'',redirectTo:'/dashboard',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

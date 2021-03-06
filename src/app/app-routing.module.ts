import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService  } from './auth-guard.service';

import {OrderlistComponent} from 'src/app/components/orderlist/orderlist.component';
import {dashboardComponent} from 'src/app/components/dashboard/dashboard.component';
import {VieworderComponent} from 'src/app/components/vieworder/vieworder.component'
import { LoginComponent } from './components/login/login.component';
import { ItemsComponent } from './components/items/items.component';
import { EdititemComponent } from './components/items/edititem/edititem.component';
import { AdditemComponent } from './components/items/additem/additem.component';
import { CategoryComponent } from './components/category/category.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
import { AddcategoryComponent } from './components/category/addcategory/addcategory.component';
import { AddComponent } from './components/subcategory/add/add.component';
import { SpecificationComponent } from './components/specification/specification.component';
import { EditspecificationComponent } from './components/specification/editspecification/editspecification.component';

import { GalleryComponent } from './components/gallery/gallery.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CustomersComponent } from './components/customers/customers.component';
import { EditCustomerComponent } from './components/customers/editcustomer/editcustomer.component';

const routes: Routes = [
  {path:'dashboard',component:dashboardComponent,canActivate:[AuthGuardService]},
  {path:'orders',component:OrderlistComponent,canActivate:[AuthGuardService]},
  {path:'ViewOrder/:id',component:VieworderComponent,canActivate:[AuthGuardService]},
  {path:'login',component:LoginComponent},
  {path:'category',component:CategoryComponent,canActivate:[AuthGuardService]},
  {path:'addcategory',component:AddcategoryComponent,canActivate:[AuthGuardService]},

  {path:'subcategory',component:SubcategoryComponent,canActivate:[AuthGuardService]},
  {path:'addsubcategory',component:AddComponent,canActivate:[AuthGuardService]},

  {path:'items',component:ItemsComponent,canActivate:[AuthGuardService]},
  {path:'additems',component:AdditemComponent,canActivate:[AuthGuardService]},
  {path:'edititems/:id',component:EdititemComponent,canActivate:[AuthGuardService]},

  {path:'addspecification/:itemid',component:SpecificationComponent,canActivate:[AuthGuardService]},
  {path:'editspecification/:id/:specification/:seq_no/:itemid',component:EditspecificationComponent,canActivate:[AuthGuardService]},

  {path:'gallery/:itemid',component:GalleryComponent,canActivate:[AuthGuardService]},
  {path:'customer',component:CustomersComponent,canActivate:[AuthGuardService]},

  {path:'editcustomer/:id/:FirstName/:Email',component:EditCustomerComponent,canActivate:[AuthGuardService]},

  {path:'logout',component:LogoutComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

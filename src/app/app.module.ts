import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { dashboardComponent } from './components/dashboard/dashboard.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { OrderlistComponent } from './components/orderlist/orderlist.component';
import { VieworderComponent } from './components/vieworder/vieworder.component';
import { LoginComponent } from './components/login/login.component';
import { ItemsComponent } from './components/items/items.component';
import { AdditemComponent } from './components/items/additem/additem.component';
import { EdititemComponent } from './components/items/edititem/edititem.component';
import { CategoryComponent } from './components/category/category.component';
import { AddcategoryComponent } from './components/category/addcategory/addcategory.component';
import { EditcategoryComponent } from './components/category/editcategory/editcategory.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
import { AddComponent } from './components/subcategory/add/add.component';
import { EditComponent } from './components/subcategory/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    dashboardComponent,
    NavmenuComponent,
    OrderlistComponent,
    VieworderComponent,
    LoginComponent,
    ItemsComponent,
    AdditemComponent,
    EdititemComponent,
    CategoryComponent,
    AddcategoryComponent,
    EditcategoryComponent,
    SubcategoryComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

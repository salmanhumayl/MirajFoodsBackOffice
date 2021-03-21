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

@NgModule({
  declarations: [
    AppComponent,
    dashboardComponent,
    NavmenuComponent,
    OrderlistComponent,
    VieworderComponent,
    LoginComponent,
    ItemsComponent
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

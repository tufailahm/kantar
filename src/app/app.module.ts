import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CityComponent } from './components/city/city.component';
import { WeatherComponent } from './components/weather/weather.component';
import { MobileNumberPipe } from './pipes/mobile-number.pipe';
import { AddTitlePipe } from './pipes/add-title.pipe';
import { HoverFocusDirective } from './directives/hover-focus.directive';
import { HideElementDirective } from './directives/hide-element.directive';
import { IfElementDirective } from './directives/if-element.directive';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    ProductListComponent,
    ProductAddComponent,
    CityComponent,
    WeatherComponent,
    MobileNumberPipe,
    AddTitlePipe,
    HoverFocusDirective,
    HideElementDirective,
    IfElementDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

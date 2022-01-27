import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AboutUsService } from './services/about-us.service';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: "employee", component: EmployeeComponent },
  { path: "employeeList", component: EmployeeListComponent },
  { path: "productList", component: ProductListComponent },
  { path: "productAdd", component: ProductAddComponent },
  { path: "productAdd/:productId", component: ProductAddComponent },
  { path: "weather", component: WeatherComponent },
  { path: "welcome", component: WelcomeComponent },
  { path: "aboutus", component: AboutUsComponent , 
  canActivate : [AboutUsService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

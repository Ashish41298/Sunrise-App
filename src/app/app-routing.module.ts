
import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BusinessComponent } from './business/business.component';
import { BudgetComponent } from './category/budget/budget.component';
import { CategoryComponent } from './category/category.component';
import { CovidComponent } from './category/covid/covid.component';
import { DharmdarshanComponent } from './category/dharmdarshan/dharmdarshan.component';
import { EntComponent } from './category/ent/ent.component';
import { LifestyleComponent } from './category/lifestyle/lifestyle.component';
import { MagazineComponent } from './category/magazine/magazine.component';
import { SportsComponent } from './category/sports/sports.component';
import { UtilityComponent } from './category/utility/utility.component';
import { CityweatherComponent } from './cityweather/cityweather.component';
import { CommentsComponent } from './comments/comments.component';
import { Error404Component } from './error404/error404.component';
import { GujaratComponent } from './gujarat/gujarat.component';
import { HomeComponent } from './home/home.component';
import { TabsComponent } from './tabs/tabs.component';
import { TechnewsComponent } from './technews/technews.component';
import { ForgateComponent } from './userAuth/forgate/forgate.component';
import { LoginComponent } from './userAuth/login/login.component';
import { ProfileComponent } from './userAuth/profile/profile.component';
import { SignupComponent } from './userAuth/signup/signup.component';

const routes: Routes = [
  { path: '', canActivate:[AuthGuard], component:HomeComponent},
  { path: 'home', canActivate:[AuthGuard], component:HomeComponent},
  {path: 'business' , canActivate:[AuthGuard], component:BusinessComponent},
  {path: 'category', canActivate:[AuthGuard], component:CategoryComponent },
  {path: 'technews',canActivate:[AuthGuard], component:TechnewsComponent},
  {path:'Login', component:LoginComponent },
  {path:'Signup', component:SignupComponent},
  {path:'forgot', component:ForgateComponent},
  {path:'profile', component:ProfileComponent},
  {path:'weather',canActivate:[AuthGuard], component:CityweatherComponent},
  {path:'comments', component:CommentsComponent},
  {path:'gujarat',canActivate:[AuthGuard], component:GujaratComponent},
  {path:'budget', component:BudgetComponent},
  {path:'magazine',component:MagazineComponent},
  {path:'sports',component:SportsComponent},
  {path:'lifestyle', component:LifestyleComponent},
  {path:'utility',component:UtilityComponent},
  {path:'darmdharshan',component:DharmdarshanComponent},
  {path:'covid', component:CovidComponent},
  {path:'Entartainment', component:EntComponent},
  {path:'tabs', component:TabsComponent},
  {path:'**', component:Error404Component}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

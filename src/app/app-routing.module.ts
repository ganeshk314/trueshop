import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellComponent } from './sell/sell.component';
import { SellHomeComponent } from './sell-home/sell-home.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { SellLoginComponent } from './sell-login/sell-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserComponent } from './user/user.component';
import { FassionComponent } from './fassion/fassion.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'sell',component: SellComponent},
  {path:'sellhome',component:SellHomeComponent,canActivate:[AuthGuardGuard]},
  {path:'sell-login',component:SellLoginComponent},
  {path:'user-login',component:UserLoginComponent},
  {path:'user',component:UserComponent},
  {path:'fassion',component:FassionComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

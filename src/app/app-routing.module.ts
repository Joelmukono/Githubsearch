import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from './search/search.component';
import {LandingComponent}from './landing/landing.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  {path:'search',component:SearchComponent },
  {path:'home',component:LandingComponent},
  { path:'**', component:NotFoundComponent},

  { path: '', redirectTo:"/goals", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

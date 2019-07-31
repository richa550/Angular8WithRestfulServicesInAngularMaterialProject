import { NgModule, Inject } from '@angular/core';
import { Routes, RouterModule, UrlSegment, CanActivate } from '@angular/router';
import {HomePageComponent } from './pages/home-page/home-page.component';

const routes = [  
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomePageComponent
  },
  {
    path:'page',
    loadChildren:'./pages/page.module#PageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}

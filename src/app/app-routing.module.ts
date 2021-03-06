/* This file has been generated manaally 
---------------------------------------------------
ng generate module app-routing --flat --module=app
---------------------------------------------------
*/

import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideoCenterComponent } from './video-center/video-center.component'
import { VideoListComponent } from './video-list/video-list.component'
import { VideoDetailComponent } from './video-detail/video-detail.component'
/*@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})*/
const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'video', component: VideoCenterComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: []
})


export class AppRoutingModule { }

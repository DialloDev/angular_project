import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import {PagePageNotFoundComponent} from './pages/page-page-not-found/page-page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: PagePageNotFoundComponent },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class PageNotFoundRoutingModule { }

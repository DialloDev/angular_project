import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import {PagePrestationsComponent} from './pages/page-prestations/page-prestations.component';

const appRoutes: Routes = [
  { path: '', component: PagePrestationsComponent },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class PrestationsRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import {PageClientComponent} from './pages/page-client/page-client.component';

const appRoutes: Routes = [
  { path: '', component: PageClientComponent },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(appRoutes)
  ]
})
export class ClientsRoutingModule { }

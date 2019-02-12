import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageClientComponent } from './pages/page-client/page-client.component';
import { ClientsRoutingModule } from './clients-routing.module';

@NgModule({
  declarations: [PageClientComponent],
  imports: [
    CommonModule, ClientsRoutingModule
  ]
})
export class ClientsModule { }

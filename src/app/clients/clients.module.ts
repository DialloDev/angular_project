import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageClientComponent } from './pages/page-client/page-client.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { ClientComponent } from './components/client/client.component';

@NgModule({
  declarations: [PageClientComponent, ListClientsComponent, ClientComponent],
  imports: [
    CommonModule, ClientsRoutingModule
  ]
})
export class ClientsModule { }

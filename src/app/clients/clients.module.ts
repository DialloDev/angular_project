import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';
import { ClientComponent } from './components/client/client.component';
import { SharedModule } from 'src/shared/shared.module';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';

@NgModule({
  declarations: [PageClientsComponent, ListClientsComponent, ClientComponent, PageAddClientComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule
  ]
})
export class ClientsModule { }

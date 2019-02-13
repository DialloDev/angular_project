import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { ClientsService } from 'src/app/prestations/services/clients.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  @Input() item: Client;
  public states = StateClient;
  constructor(private ps: ClientsService) { }

  ngOnInit() {
  }
  public changeState(e) {
    const state = e.target.value;
    this.ps.update(this.item, state);
  }

}

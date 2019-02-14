import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/shared/models/client.model';
import { ClientService } from '../../services/client.service';
import { StateClient } from 'src/shared/enums/state-client.enum';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  @Input() item: Client;
  //  public states = Object.values(State);
  public states = StateClient;
  constructor( private cs: ClientService ) { }

  ngOnInit() {
  }

  public changeState(item: Client, event) {
    const state = event.target.value;
    this.cs.update(item, state);
  }

}

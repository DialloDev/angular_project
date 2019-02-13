import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { FakeClients } from './fake-clients';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private Collection: Client[];
  constructor() {
    this.collection = FakeClients;
   }
  // recuperer la collection
  public get collection(): Client[] {
    return this.Collection;
  }
  // set la collection
  public set collection(col: Client[]) {
    this.Collection = col;
  }
  // add item in collection
  public update(item: Client, state: StateClient) {
    item.state = state;
    console.log(item.state);
  }
}

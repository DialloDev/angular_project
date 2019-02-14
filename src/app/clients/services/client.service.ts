import { Injectable } from '@angular/core';
import { Client } from 'src/shared/models/client.model';
import { StateClient } from 'src/shared/enums/state-client.enum';
import { FakeClients } from './fake-clients';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

   // tslint:disable-next-line:variable-name
   private _collection: Client[];
   constructor() {
     this.collection = FakeClients;
   }

   // get collection
   public get collection(): Client[] {
     return this._collection;
   }
   // set collection
   public set collection(col: Client[]) {
     this._collection = col;
   }

   // update item of collection
   public update(item: Client, state: StateClient) {
     item.state = state;
   }

   // add item in collection

   // delete item in collection

   // get itemby id
  }

import { Prestation } from 'src/shared/models/prestation.model';
import { Client } from 'src/shared/models/client.model';
import { StateClient } from 'src/shared/enums/state-client.enum';

export const FakeClients: Client[] = [
  new Client({
    id: 'id_1',
    name: 'Client_1',
    email: 'client_1@email.com',
    state: StateClient.ACTIF
  }),

  new Client({
    id: 'id_2',
    name: 'Client_2',
    email: 'client_2@email.com',
    state: StateClient.ACTIF
  }),

  new Client({
    id: 'id_3',
    name: 'Client_3',
    email: 'client_3@email.com',
    state: StateClient.ACTIF
  }),
];

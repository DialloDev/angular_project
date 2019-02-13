import { Client } from 'src/app/shared/models/client.model';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

export const FakeClients: Client[] = [
  new Client({
    client: 'test',
    name:'test',
    state : StateClient.ACTIF
}),
new Client()
];

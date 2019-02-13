import { StateClient } from '../enums/state-client.enum';

export interface ClientI {
  client: string;
  name: string;
  email: string;
  state: StateClient;
}

import { ClientI } from '../interfaces/client-i';

export class Client implements ClientI {
  client: string;
  name: string;
  email: string;
  state: string;
}

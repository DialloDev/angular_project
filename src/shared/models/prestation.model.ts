import { PrestationI } from '../interfaces/prestation-i';
import { State } from '../enums/state.enum';

export class Prestation implements PrestationI {
  id: string;
  typePresta: string;
  client: string;
  tjmHt = 0;
  nbJours: number;
  tauxTva = 0;
  comment: string;
  state = State.OPTION;

  constructor(fields?: Partial<Prestation>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }

  totalHT(): number {
    console.log('HT');

    return this.nbJours * this.tjmHt;
  }
  totalTTC(tva?: number): number {
    console.log('TTC');
    if (!tva) {
      return this.totalHT() * (1 + this.tauxTva / 100);
    }
    if (tva <= 0) {
      return this.totalHT();
    }
    return this.totalHT() * (1 + tva / 100);
  }
}

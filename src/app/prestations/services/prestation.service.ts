import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { FakePrestations } from './fake-prestations';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  private Collection: Prestation[];

  constructor() {
    this.collection = FakePrestations;
   }
  // recuperer la collection
  public get collection(): Prestation[] {
    return this.Collection;
  }
  // set la collection
  public set collection(col: Prestation[]) {
    this.Collection = col;
  }
  // add item in collection

  // delete item in collection

}

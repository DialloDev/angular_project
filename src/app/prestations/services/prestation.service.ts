import { Injectable } from '@angular/core';
import { Prestation } from 'src/shared/models/prestation.model';
import { FakePrestations } from './fake-prestations';
import { State } from 'src/shared/enums/state.enum';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  // tslint:disable-next-line:variable-name
  private _collection: Prestation[];
  constructor() {
    this.collection = FakePrestations;
  }

  // get collection
  public get collection(): Prestation[] {
    return this._collection;
  }
  // set collection
  public set collection(col: Prestation[]) {
    this._collection = col;
  }

  // update item of collection
  public update(item: Prestation, state: State) {
    item.state = state;
  }

  public add(item: Prestation) {
    this._collection.push(new Prestation(item));
  }

  // add item in collection
  // delete item in collection

  // get itemby id
}

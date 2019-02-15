import { Injectable } from '@angular/core';
import { Prestation } from 'src/shared/models/prestation.model';
import { State } from 'src/shared/enums/state.enum';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  // tslint:disable-next-line:variable-name
  private itemsCollection: AngularFirestoreCollection<Prestation>;
  private Collection: Observable<Prestation[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Prestation>('prestations');
    this.collection = this.itemsCollection.valueChanges().pipe(
      // map( data => data.map( item => new Prestation(item)))
      map( (data) => {
        return data.map( (item) => {
          return new Prestation(item);
        });
      })
    );
  }

  /* get collection
  public get collection(): Observable<Prestation[]> {
    return this.Collection;
  }
  // set collection
  public set collection(col: Observable<Prestation[]>) {
    this.Collection = col;
  }

  // update item of collection
  public update(item: Prestation, state: State) {
    item.state = state;
  }

  public add(item: Prestation) {
    // this._collection.push(new Prestation(item));
  }

  // add item in collection
  // delete item in collection

  // get itemby id */
  // add presta
  add(item: Prestation): Promise<any> {
    const id = this.afs.createId();
    const prestation = { id, ...item };
    return this.itemsCollection.doc(id).set(prestation).catch((e) => {
      console.log(e);
    });
    // return this.http.post('urlapi/addprestation', item);
  }


  update(item: Prestation, state?: State): Promise<any> {
    const presta  = {...item};
    if (state) {
      presta.state = state;
    }
    return this.itemsCollection.doc(item.id).update(presta).catch((e) => {
      console.log(e);
    });
    // return this.http.patch('urlapi/prestationupdate/'+item.id, presta);
  }

  public delete(item: Prestation): Promise<any> {
    return this.itemsCollection.doc(item.id).delete().catch((e) => {
      console.log(e);
    });
    // return this.http.delete(`urlapi/prestations/delete/${item.id}`);
  }

  getPrestation(id: string): Observable<Prestation> {
    return this.itemsCollection.doc<Prestation>(id).valueChanges();
    // return this.http.get(`urlapi/prestations/get/${id}`);
  }
}

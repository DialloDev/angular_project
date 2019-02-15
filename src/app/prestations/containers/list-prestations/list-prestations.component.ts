import { Component, OnInit, OnDestroy } from '@angular/core';
import { Prestation } from 'src/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit, OnDestroy {
  public collection$: Observable<Prestation[]>;
  // public collection: Prestation[];
  public headers: string[];
  public linkAddPresta = 'Add Prestaion';
  private sub: Subscription;

  constructor(private ps: PrestationService) { }

  ngOnInit() {
    this.collection$ = this.ps.collection;
 // this.sub = this.ps.collection.subscribe(
  //  (data) => (this.collection = data)
  // );
    this.headers = [
      'type',
      'client',
      'nb jours',
      'tjm ht',
      'total ht',
      'total ttc',
      'state',
      'edit'
    ];
  }
  ngOnDestroy() {
   // this.sub.unsubscribe();
  }
}

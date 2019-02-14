import { Component, Input, OnInit } from '@angular/core';
import { Prestation } from 'src/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';
import { State } from 'src/shared/enums/state.enum';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {
  @Input() item: Prestation;
  //  public states = Object.values(State);
  public states = State;
  constructor( private ps: PrestationService ) { }

  ngOnInit() {
  }

  public changeState(item: Prestation, event) {
    const state = event.target.value;
    this.ps.update(item, state);
  }

}

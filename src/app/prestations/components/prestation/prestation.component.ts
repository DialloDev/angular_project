import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';
import { State } from 'src/app/shared/enums/state.enum';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {
  @Input() item: Prestation;
  public states = State;
  constructor(private ps: PrestationService) { }

  ngOnInit() {
  }
  public changeState(e) {
    const state = e.target.value;
    this.ps.update(this.item, state);
  }
}

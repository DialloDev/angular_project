import { Component, OnInit } from '@angular/core';
import { Prestation } from 'src/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifier-prestation',
  templateUrl: './modifier-prestation.component.html',
  styleUrls: ['./modifier-prestation.component.scss']
})
export class ModifierPrestationComponent implements OnInit {

  constructor(
    private ps: PrestationService,
    private route: ActivatedRoute ) { }

  ngOnInit() {
  }
  update(item: Prestation) {
    this.ps.update(item);
  }
}

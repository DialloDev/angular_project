import { Component, Input, OnInit, ViewChild, ElementRef, Renderer2, Output } from '@angular/core';
import { Prestation } from 'src/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';
import { State } from 'src/shared/enums/state.enum';
import { faEdit} from '@fortawesome/free-solid-svg-icons';
import { EventEmitter } from 'events';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {
  @Input() item: Prestation;
  @ViewChild('first') elem: ElementRef;
  //  public states = Object.values(State);
  public states = State;
  public faEdit = faEdit;
  constructor( private ps: PrestationService,
    // tslint:disable-next-line:align
     private renderer: Renderer2,
               private router: Router ) { }

  ngOnInit() {
  }

  public changeState(item: Prestation, event) {
    const state = event.target.value;
    this.ps.update(this.item, state).then((data) => {
      this.item.state = state;
    });
  }

  public getDetail() {
    console.log(this.elem.nativeElement);
    this.renderer.addClass(this.elem.nativeElement, 'active');
    this.ps.detail$.next(this.item);
  }
  public goToDetail() {
    this.router.navigate(['prestations/edit', this.item.id]);
  }
}

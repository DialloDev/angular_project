import { Directive, HostBinding, Input, OnChanges } from '@angular/core';
import { State } from '../enums/state.enum';
import { StateClient } from '../enums/state-client.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: State | StateClient;
  @HostBinding('class') nameClass: string;
  constructor() {}

  ngOnChanges() {
    console.log(this.appState);
    this.nameClass = this.formatcClass(this.appState);
  }

  private formatcClass(state: State | StateClient): string {
    return `state-${state.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '').toLowerCase()}`;
  }
}

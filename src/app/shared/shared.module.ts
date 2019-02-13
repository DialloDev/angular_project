import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { TableauComponent } from './containers/tableau/tableau.component';
import { StateDirective } from './directives/state.directive';
import { StateClientDirective } from './directives/state-client.directive';


@NgModule({
  declarations: [TotalPipe, TableauComponent, StateDirective, StateClientDirective],
  exports: [TotalPipe, TableauComponent, StateDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

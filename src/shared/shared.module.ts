import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplatesModule } from 'src/app/templates/templates.module';
import { AddRowComponent } from './components/add-row/add-row.component';
import { TableauComponent } from './containers/tableau/tableau.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TotalPipe, TableauComponent, StateDirective, AddRowComponent],
  exports: [TotalPipe, TableauComponent, StateDirective, TemplatesModule, AddRowComponent],
  imports: [
    CommonModule,
    TemplatesModule,
    RouterModule
  ]
})
export class SharedModule { }

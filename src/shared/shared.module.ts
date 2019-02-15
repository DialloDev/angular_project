import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplatesModule } from 'src/app/templates/templates.module';
import { AddRowComponent } from './components/add-row/add-row.component';
import { TableauComponent } from './containers/tableau/tableau.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';
import { RouterModule } from '@angular/router';
import { LinksComponent } from './components/links/links.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [TotalPipe, TableauComponent, StateDirective, AddRowComponent, LinksComponent],
  exports: [TotalPipe, TableauComponent, StateDirective, TemplatesModule, AddRowComponent, LinksComponent],
  imports: [
    CommonModule,
    TemplatesModule,
    RouterModule, FontAwesomeModule
  ]
})
export class SharedModule { }

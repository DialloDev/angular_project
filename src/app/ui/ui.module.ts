import { NgModule } from '@angular/core';
import {CoderbaseUiModule} from '@coderbase/ui';
import { CommonModule } from '@angular/common';
import { UiComponent } from './containers/ui/ui.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UiComponent, NavComponent, HeaderComponent, FooterComponent],
  exports: [UiComponent],
  imports: [
    CommonModule,
    CoderbaseUiModule,
    RouterModule
  ]
})
export class UiModule { }

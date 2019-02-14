import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { SharedModule } from 'src/shared/shared.module';
import { PrestationComponent } from './components/prestation/prestation.component';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { FormPrestationComponent } from './components/form-prestation/form-prestation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormPrestaComponent } from './components/form-presta/form-presta.component';

@NgModule({
  declarations: [
    PagePrestationsComponent,
    ListPrestationsComponent,
    PrestationComponent,
    PageAddPrestationComponent,
    AddPrestationComponent,
    FormPrestationComponent,
    FormPrestaComponent
  ],
  imports: [CommonModule, PrestationsRoutingModule, SharedModule, FormsModule,
    ReactiveFormsModule]
})
export class PrestationsModule {}

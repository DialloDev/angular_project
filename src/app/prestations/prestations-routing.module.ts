import { NgModule } from '@angular/core';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { RouterModule, Routes } from '@angular/router';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { CommentPrestationComponent } from './components/comment-prestation/comment-prestation.component';
import { DetailPrestationComponent } from './components/detail-prestation/detail-prestation.component';
import { PageEditComponent } from './pages/page-edit/page-edit.component';

const appRoutes: Routes = [

  { path: '',
   component: PagePrestationsComponent,
    children: [
      { path: '',
        redirectTo: 'detail',
        pathMatch: 'full'
       },
      { path: 'detail', component: DetailPrestationComponent },
      { path: 'comment', component: CommentPrestationComponent },
      { path: 'add', component: PageAddPrestationComponent  },
      { path: 'edit/:id', component: PageEditComponent }
    ],
  },
  { path: 'add', component: PageAddPrestationComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes,
    )
  ],
  exports: [RouterModule]
})
export class PrestationsRoutingModule { }

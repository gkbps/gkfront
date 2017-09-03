import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComposeComponent } from './compose.component';

const routes: Routes = [
  {
    path: '',
    component: ComposeComponent,
    data: {
      title: 'Compose'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComposeRoutingModule {}

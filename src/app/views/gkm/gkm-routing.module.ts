import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GkmComponent } from './gkm.component';

const routes: Routes = [
  {
    path: '',
    component: GkmComponent,
    data: {
      title: 'GK Management'
    },
    children: [      
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GkmRoutingModule {}

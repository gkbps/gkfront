import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GkClnComponent } from './gkcln.component';
import { GkCln01Component } from './components/gkcln01';

const routes: Routes = [
  {
    path: '',
    component: GkClnComponent,
    data: {
      title: 'GK Client'
    },
    children: [
      {
        path: 'gkcln01',
        component: GkCln01Component,
        data: {
          title: 'GK Client'
        }
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GkClnRoutingModule {}

import { PDragDrop } from './pdragDrop.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dragDrop',
    component: PDragDrop,
  },
];

export const routing = RouterModule.forChild(routes);

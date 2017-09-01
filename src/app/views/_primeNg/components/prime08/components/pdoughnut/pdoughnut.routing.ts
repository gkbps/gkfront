import { PDoughnut } from './pdoughnut.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'doughnut',
    component: PDoughnut,
  },
];

export const routing = RouterModule.forChild(routes);

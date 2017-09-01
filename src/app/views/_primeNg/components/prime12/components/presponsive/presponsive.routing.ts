import { PResponsive } from './presponsive.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'responsive',
    component: PResponsive,
  },
];

export const routing = RouterModule.forChild(routes);

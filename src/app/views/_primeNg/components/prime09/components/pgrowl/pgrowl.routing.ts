import { PGrowl } from './pgrowl.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'growl',
    component: PGrowl,
  },
];

export const routing = RouterModule.forChild(routes);

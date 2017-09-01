import { PGrid } from './pgrid.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'grid',
    component: PGrid,
  },
];

export const routing = RouterModule.forChild(routes);

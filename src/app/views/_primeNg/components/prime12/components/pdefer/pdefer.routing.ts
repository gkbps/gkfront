import { PDefer } from './pdefer.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'defer',
    component: PDefer,
  },
];

export const routing = RouterModule.forChild(routes);

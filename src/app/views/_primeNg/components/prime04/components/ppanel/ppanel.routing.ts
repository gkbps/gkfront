import { PPanel } from './ppanel.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'panel',
    component: PPanel,
  },
];

export const routing = RouterModule.forChild(routes);

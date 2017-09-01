import { PChips } from './pchips.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'chips',
    component: PChips,
  },
];

export const routing = RouterModule.forChild(routes);

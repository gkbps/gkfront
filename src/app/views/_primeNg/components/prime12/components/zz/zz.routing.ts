import { zx } from './zz.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'zy',
    component: zx,
  },
];

export const routing = RouterModule.forChild(routes);

import { PRtl } from './prtl.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'rtl',
    component: PRtl,
  },
];

export const routing = RouterModule.forChild(routes);

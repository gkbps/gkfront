import { PValidation } from './pvalidation.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'validation',
    component: PValidation,
  },
];

export const routing = RouterModule.forChild(routes);

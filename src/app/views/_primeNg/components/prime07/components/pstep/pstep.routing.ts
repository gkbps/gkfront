import { PStep } from './pstep.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'step',
    component: PStep,
  },
];

export const routing = RouterModule.forChild(routes);

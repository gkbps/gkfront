import { PProgressBar } from './pprogressBar.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'progressBar',
    component: PProgressBar,
  },
];

export const routing = RouterModule.forChild(routes);

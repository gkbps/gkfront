import { PBar } from './pbar.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'bar',
    component: PBar,
  },
];

export const routing = RouterModule.forChild(routes);

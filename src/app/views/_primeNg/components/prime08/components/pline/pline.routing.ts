import { PLine } from './pline.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'line',
    component: PLine,
  },
];

export const routing = RouterModule.forChild(routes);

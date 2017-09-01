import { PGmap } from './pgmap.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'gmap',
    component: PGmap,
  },
];

export const routing = RouterModule.forChild(routes);

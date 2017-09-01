import { PRadar } from './pradar.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'radar',
    component: PRadar,
  },
];

export const routing = RouterModule.forChild(routes);

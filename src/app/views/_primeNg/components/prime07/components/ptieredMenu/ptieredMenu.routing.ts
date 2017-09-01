import { PTieredMenu } from './ptieredMenu.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'tieredMenu',
    component: PTieredMenu,
  },
];

export const routing = RouterModule.forChild(routes);

import { PBlockUI } from './pblockUI.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'blockUI',
    component: PBlockUI,
  },
];

export const routing = RouterModule.forChild(routes);

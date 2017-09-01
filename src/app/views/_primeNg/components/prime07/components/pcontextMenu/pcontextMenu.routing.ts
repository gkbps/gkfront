import { PContextMenu } from './pcontextMenu.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'contextMenu',
    component: PContextMenu,
  },
];

export const routing = RouterModule.forChild(routes);

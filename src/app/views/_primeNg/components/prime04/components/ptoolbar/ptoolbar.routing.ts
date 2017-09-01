import { PToolbar } from './ptoolbar.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'toolbar',
    component: PToolbar,
  },
];

export const routing = RouterModule.forChild(routes);

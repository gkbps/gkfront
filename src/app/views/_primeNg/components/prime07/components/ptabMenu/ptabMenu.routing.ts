import { PTabMenu } from './ptabMenu.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabMenu',
    component: PTabMenu,
  },
];

export const routing = RouterModule.forChild(routes);

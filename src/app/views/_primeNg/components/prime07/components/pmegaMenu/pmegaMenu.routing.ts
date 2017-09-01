import { PMegaMenu } from './pmegaMenu.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'megaMenu',
    component: PMegaMenu,
  },
];

export const routing = RouterModule.forChild(routes);

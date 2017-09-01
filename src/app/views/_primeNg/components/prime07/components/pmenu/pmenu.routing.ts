import { PMenu } from './pmenu.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'menu',
    component: PMenu,
  },
];

export const routing = RouterModule.forChild(routes);

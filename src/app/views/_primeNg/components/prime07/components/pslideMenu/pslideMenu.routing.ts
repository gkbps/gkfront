import { PSlideMenu } from './pslideMenu.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'slideMenu',
    component: PSlideMenu,
  },
];

export const routing = RouterModule.forChild(routes);

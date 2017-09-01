import { PPanelMenu } from './ppanelMenu.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'panelMenu',
    component: PPanelMenu,
  },
];

export const routing = RouterModule.forChild(routes);

import { PTabView } from './ptabView.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabView',
    component: PTabView,
  },
];

export const routing = RouterModule.forChild(routes);

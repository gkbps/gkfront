import { PMenuBar } from './pmenuBar.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'menuBar',
    component: PMenuBar,
  },
];

export const routing = RouterModule.forChild(routes);

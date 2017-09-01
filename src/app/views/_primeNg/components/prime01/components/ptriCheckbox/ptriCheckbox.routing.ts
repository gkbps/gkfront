import { PTriCheckbox } from './ptriCheckbox.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'triCheckbox',
    component: PTriCheckbox,
  },
];

export const routing = RouterModule.forChild(routes);

import { PToggleButton } from './ptoggleButton.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'toggleButton',
    component: PToggleButton,
  },
];

export const routing = RouterModule.forChild(routes);

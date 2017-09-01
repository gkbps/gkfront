import { PTerminal } from './pterminal.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'terminal',
    component: PTerminal,
  },
];

export const routing = RouterModule.forChild(routes);

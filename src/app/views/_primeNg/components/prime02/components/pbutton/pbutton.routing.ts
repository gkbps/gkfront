import { PButton } from './pbutton.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'button',
    component: PButton,
  },
];

export const routing = RouterModule.forChild(routes);

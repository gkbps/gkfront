import { PSelectButton } from './pselectButton.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'selectButton',
    component: PSelectButton,
  },
];

export const routing = RouterModule.forChild(routes);

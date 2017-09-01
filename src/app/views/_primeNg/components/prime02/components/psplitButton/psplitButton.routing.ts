import { PSplitButton } from './psplitButton.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'splitButton',
    component: PSplitButton,
  },
];

export const routing = RouterModule.forChild(routes);

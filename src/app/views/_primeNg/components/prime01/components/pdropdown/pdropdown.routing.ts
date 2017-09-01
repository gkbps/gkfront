import { PDropdown } from './pdropdown.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dropdown',
    component: PDropdown,
  },
];

export const routing = RouterModule.forChild(routes);

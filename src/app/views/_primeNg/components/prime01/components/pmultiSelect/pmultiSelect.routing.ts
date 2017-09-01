import { PMultiSelect } from './pmultiSelect.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'multiSelect',
    component: PMultiSelect,
  },
];

export const routing = RouterModule.forChild(routes);

import { PFieldSet } from './pfieldSet.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'fieldSet',
    component: PFieldSet,
  },
];

export const routing = RouterModule.forChild(routes);

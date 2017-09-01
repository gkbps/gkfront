import { PAccordion } from './paccordion.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'accordion',
    component: PAccordion,
  },
];

export const routing = RouterModule.forChild(routes);

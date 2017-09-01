import { PInplace } from './pinplace.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'inplace',
    component: PInplace,
  },
];

export const routing = RouterModule.forChild(routes);

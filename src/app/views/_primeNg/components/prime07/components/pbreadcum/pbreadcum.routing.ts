import { PBreadcum } from './pbreadcum.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'breadcum',
    component: PBreadcum,
  },
];

export const routing = RouterModule.forChild(routes);

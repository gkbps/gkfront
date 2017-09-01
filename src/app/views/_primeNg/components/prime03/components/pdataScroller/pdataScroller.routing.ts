import { PDataScroller } from './pdataScroller.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dataScroller',
    component: PDataScroller,
  },
];

export const routing = RouterModule.forChild(routes);

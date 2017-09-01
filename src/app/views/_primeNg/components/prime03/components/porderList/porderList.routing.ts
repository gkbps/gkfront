import { POrderList } from './porderList.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'orderList',
    component: POrderList,
  },
];

export const routing = RouterModule.forChild(routes);

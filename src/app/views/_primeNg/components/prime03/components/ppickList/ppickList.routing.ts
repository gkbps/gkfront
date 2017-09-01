import { PPickList } from './ppickList.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'pickList',
    component: PPickList,
  },
];

export const routing = RouterModule.forChild(routes);

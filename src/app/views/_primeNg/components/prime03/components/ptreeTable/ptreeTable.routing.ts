import { PTreeTable } from './ptreeTable.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'treeTable',
    component: PTreeTable,
  },
];

export const routing = RouterModule.forChild(routes);

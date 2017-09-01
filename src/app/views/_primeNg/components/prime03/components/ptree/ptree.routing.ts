import { PTree } from './ptree.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'tree',
    component: PTree,
  },
];

export const routing = RouterModule.forChild(routes);

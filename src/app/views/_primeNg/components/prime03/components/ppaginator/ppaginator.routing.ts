import { PPaginator } from './ppaginator.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'paginator',
    component: PPaginator,
  },
];

export const routing = RouterModule.forChild(routes);

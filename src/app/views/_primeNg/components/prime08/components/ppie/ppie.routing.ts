import { PPie } from './ppie.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'pie',
    component: PPie,
  },
];

export const routing = RouterModule.forChild(routes);

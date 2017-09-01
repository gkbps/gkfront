import { POrgChart } from './porgChart.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'orgChart',
    component: POrgChart,
  },
];

export const routing = RouterModule.forChild(routes);

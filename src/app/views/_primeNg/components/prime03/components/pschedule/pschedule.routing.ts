import { PSchedule } from './pschedule.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'schedule',
    component: PSchedule,
  },
];

export const routing = RouterModule.forChild(routes);

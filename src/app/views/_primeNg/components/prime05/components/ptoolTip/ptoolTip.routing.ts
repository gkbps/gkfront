import { PToolTip } from './ptoolTip.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'toolTip',
    component: PToolTip,
  },
];

export const routing = RouterModule.forChild(routes);

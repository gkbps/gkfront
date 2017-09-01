import { PCheckBox } from './pcheckBox.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'checkBox',
    component: PCheckBox,
  },
];

export const routing = RouterModule.forChild(routes);

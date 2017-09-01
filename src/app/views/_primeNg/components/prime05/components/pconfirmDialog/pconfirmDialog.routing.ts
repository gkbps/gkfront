import { PConfirmDialog } from './pconfirmDialog.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'confirmDialog',
    component: PConfirmDialog,
  },
];

export const routing = RouterModule.forChild(routes);

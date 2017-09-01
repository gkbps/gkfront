import { PDialog } from './pdialog.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dialog',
    component: PDialog,
  },
];

export const routing = RouterModule.forChild(routes);

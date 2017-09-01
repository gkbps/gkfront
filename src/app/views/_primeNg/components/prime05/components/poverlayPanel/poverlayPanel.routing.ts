import { POverlayPanel } from './poverlayPanel.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'overlayPanel',
    component: POverlayPanel,
  },
];

export const routing = RouterModule.forChild(routes);

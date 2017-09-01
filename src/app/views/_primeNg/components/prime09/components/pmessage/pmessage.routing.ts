import { PMessage } from './pmessage.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'message',
    component: PMessage,
  },
];

export const routing = RouterModule.forChild(routes);

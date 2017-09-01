import { PPolarArea } from './ppolarArea.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'polarArea',
    component: PPolarArea,
  },
];

export const routing = RouterModule.forChild(routes);

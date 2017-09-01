import { PLightBox } from './plightBox.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'lightBox',
    component: PLightBox,
  },
];

export const routing = RouterModule.forChild(routes);

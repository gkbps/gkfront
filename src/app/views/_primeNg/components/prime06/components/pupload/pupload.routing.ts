import { PUpload } from './pupload.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'upload',
    component: PUpload,
  },
];

export const routing = RouterModule.forChild(routes);

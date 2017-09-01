import { PGalarie } from './pgalarie.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'galarie',
    component: PGalarie,
  },
];

export const routing = RouterModule.forChild(routes);

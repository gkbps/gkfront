import { PAutoComplete } from './pautoComplete.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'autoComplete',
    component: PAutoComplete,
  },
];

export const routing = RouterModule.forChild(routes);

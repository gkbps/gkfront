import { PDataGrid } from './pdataGrid.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dataGrid',
    component: PDataGrid,
  },
];

export const routing = RouterModule.forChild(routes);

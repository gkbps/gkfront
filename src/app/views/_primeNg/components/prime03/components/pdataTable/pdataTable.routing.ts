import { PDataTable } from './pdataTable.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dataTable',
    component: PDataTable,
  },
];

export const routing = RouterModule.forChild(routes);

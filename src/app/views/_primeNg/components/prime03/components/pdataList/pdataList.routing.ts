import { PDataList } from './pdataList.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dataList',
    component: PDataList,
  },
];

export const routing = RouterModule.forChild(routes);

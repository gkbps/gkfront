import { Prime03 } from './prime03.component';

import { PCarousel } from './components/pcarousel/pcarousel.component';
import { PDataList } from './components/pdataList/pdataList.component';
import { PDataTable } from './components/pdataTable/pdataTable.component';
import { POrderList } from './components/porderList/porderList.component';
import { PPaginator } from './components/ppaginator/ppaginator.component';
import { PSchedule } from './components/pschedule/pschedule.component';
import { PDataGrid } from './components/pdataGrid/pdataGrid.component';
import { PDataScroller } from './components/pdataScroller/pdataScroller.component';
import { POrgChart } from './components/porgChart/porgChart.component';
import { PGmap } from './components/pgmap/pgmap.component';
import { PPickList } from './components/ppickList/ppickList.component';
import { PTree } from './components/ptree/ptree.component';
import { PTreeTable } from './components/ptreeTable/ptreeTable.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Prime03,
    children: [
      // { path: '', component: InputGroup },

      { path: 'carousel', component: PCarousel },
      { path: 'dataList', component: PDataList },
      { path: 'inputgroup', component: PTreeTable },
      { path: 'paginator', component: PPaginator },
      { path: 'orderList', component: POrderList },
      { path: 'schedule', component: PSchedule },
      { path: 'dataGrid', component: PDataGrid },
      { path: 'dataScroller', component: PDataScroller },
      { path: 'orgChart', component: POrgChart },
      { path: 'gmap', component: PGmap },
      { path: 'pickList', component: PPickList },
      { path: 'tree', component: PTree },
      { path: 'treeTable', component: PTreeTable },

    ],
  },
];

export const routing = RouterModule.forChild(routes);

import { Prime04 } from './prime04.component';

import { PAccordion } from './components/paccordion/paccordion.component';
import { PPanel } from './components/ppanel/ppanel.component';
import { PTabView } from './components/ptabView/ptabView.component';
import { PFieldSet } from './components/pfieldSet/pfieldSet.component';
import { PGrid } from './components/pgrid/pgrid.component';
import { PToolbar } from './components/ptoolbar/ptoolbar.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Prime04,
    children: [
      // { path: '', component: InputGroup },

      { path: 'accordion', component: PAccordion },
      { path: 'panel', component: PPanel },
      { path: 'tabView', component: PTabView },
      { path: 'fieldSet', component: PFieldSet },
      { path: 'grid', component: PGrid },

    ],
  },
];

export const routing = RouterModule.forChild(routes);

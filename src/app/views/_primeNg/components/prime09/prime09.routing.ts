import { Prime09 } from './prime09.component';

import { PMessage } from './components/pmessage/pmessage.component';
import { PGrowl } from './components/pgrowl/pgrowl.component';
// import { } from './components';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Prime09,
    children: [
      // { path: '', component: InputGroup },

      { path: 'message', component: PMessage },
      { path: 'growl', component: PGrowl },
      // { path: '', component:  },

    ],
  },
];

export const routing = RouterModule.forChild(routes);

import { Prime11 } from './prime11.component';

import { PDragDrop } from './components/pdragDrop/pdragDrop.component';
// import { } from './components';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Prime11,
    children: [
      // { path: '', component: InputGroup },

      { path: 'dragDrop', component: PDragDrop },
      // { path: '', component:  },

    ],
  },
];

export const routing = RouterModule.forChild(routes);

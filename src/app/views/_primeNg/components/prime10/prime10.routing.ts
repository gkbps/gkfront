import { Prime10 } from './prime10.component';

import { PGalarie } from './components/pgalarie/pgalarie.component';
// import { } from './components';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Prime10,
    children: [
      // { path: '', component: InputGroup },

      { path: 'galarie', component: PGalarie },
      // { path: '', component:  },

    ],
  },
];

export const routing = RouterModule.forChild(routes);

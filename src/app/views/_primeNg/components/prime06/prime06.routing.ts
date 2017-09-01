import { Prime06 } from './prime06.component';

import { PUpload } from './components/pupload/pupload.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Prime06,
    children: [
      // { path: '', component: InputGroup },

      { path: 'upload', component: PUpload },    

    ],
  },
];

export const routing = RouterModule.forChild(routes);

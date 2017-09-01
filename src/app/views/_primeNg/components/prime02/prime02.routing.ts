import { Prime02 } from './prime02.component';

import { PButton } from './components/pbutton/pbutton.component';
import { PSplitButton } from './components/psplitButton/psplitButton.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Prime02,
    children: [
      // { path: '', component: InputGroup },

      { path: 'button', component: PButton },
      { path: 'splitButton', component: PSplitButton },      

    ],
  },
];

export const routing = RouterModule.forChild(routes);

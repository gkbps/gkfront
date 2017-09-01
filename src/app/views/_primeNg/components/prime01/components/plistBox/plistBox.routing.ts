import { PListBox } from './plistBox.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'listBox',
    component: PListBox,
  },
];

export const routing = RouterModule.forChild(routes);

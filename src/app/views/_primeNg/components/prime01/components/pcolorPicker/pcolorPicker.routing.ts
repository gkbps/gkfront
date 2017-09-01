import { PColorPicker } from './pcolorPicker.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'colorPicker',
    component: PColorPicker,
  },
];

export const routing = RouterModule.forChild(routes);

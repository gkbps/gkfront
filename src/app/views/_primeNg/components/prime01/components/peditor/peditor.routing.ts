import { PEditor } from './peditor.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'editor',
    component: PEditor,
  },
];

export const routing = RouterModule.forChild(routes);

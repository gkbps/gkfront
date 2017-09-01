import { PSlider } from './pslider.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'slider',
    component: PSlider,
  },
];

export const routing = RouterModule.forChild(routes);

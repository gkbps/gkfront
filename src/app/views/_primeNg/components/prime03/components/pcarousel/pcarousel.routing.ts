import { PCarousel } from './pcarousel.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'carousel',
    component: PCarousel,
  },
];

export const routing = RouterModule.forChild(routes);

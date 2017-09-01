import { PCaptcha } from './pcaptcha.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'captcha',
    component: PCaptcha,
  },
];

export const routing = RouterModule.forChild(routes);

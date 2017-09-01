import { PRadioButton } from './pradioButton.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'radioButton',
    component: PRadioButton,
  },
];

export const routing = RouterModule.forChild(routes);

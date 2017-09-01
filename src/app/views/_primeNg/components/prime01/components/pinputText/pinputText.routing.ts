import { PInputText } from './pinputText.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'inputText',
    component: PInputText,
  },
];

export const routing = RouterModule.forChild(routes);

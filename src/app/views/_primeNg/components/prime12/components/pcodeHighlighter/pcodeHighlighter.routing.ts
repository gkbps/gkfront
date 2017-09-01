import { PCodeHighlighter } from './pcodeHighlighter.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'codeHighlighter',
    component: PCodeHighlighter,
  },
];

export const routing = RouterModule.forChild(routes);

import { Prime08 } from './prime08.component';

import { PDoughnut } from './components/pdoughnut/pdoughnut.component';
import { PPolarArea } from './components/ppolarArea/ppolarArea.component';
import { PRadar } from './components/pradar/pradar.component';
import { PBar } from './components/pbar/pbar.component';
import { PLine } from './components/pline/pline.component';
import { PPie } from './components/ppie/ppie.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Prime08,
    children: [
      // { path: '', component: InputGroup },

      { path: 'doughnut', component: PDoughnut },
      { path: 'polarArea', component: PPolarArea },
      { path: 'radar', component: PRadar },
      { path: 'bar', component: PBar },
      { path: 'line', component: PLine },
      { path: 'pie', component: PPie },


    ],
  },
];

export const routing = RouterModule.forChild(routes);

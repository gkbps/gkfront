import { Prime07 } from './prime07.component';

import { PContextMenu } from './components/pcontextMenu/pcontextMenu.component';
import { PMenu } from './components/pmenu/pmenu.component';
import { PPanelMenu } from './components/ppanelMenu/ppanelMenu.component';
import { PStep } from './components/pstep/pstep.component';
import { PTieredMenu } from './components/ptieredMenu/ptieredMenu.component';
import { PBreadcum } from './components/pbreadcum/pbreadcum.component';
import { PMegaMenu } from './components/pmegaMenu/pmegaMenu.component';
import { PMenuBar } from './components/pmenuBar/pmenuBar.component';
import { PSlideMenu } from './components/pslideMenu/pslideMenu.component';
import { PTabMenu } from './components/ptabMenu/ptabMenu.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Prime07,
    children: [
      // { path: '', component: InputGroup },

      { path: 'contextMenu', component: PContextMenu },
      { path: 'menu', component: PMenu },
      { path: 'panelMenu', component: PPanelMenu },
      { path: 'step', component: PStep },
      { path: 'tieredMenu', component: PTieredMenu },
      { path: 'breadcum', component: PBreadcum },
      { path: 'megaMenu', component: PMegaMenu },
      { path: 'slideMenu', component: PSlideMenu },
      { path: 'tabMenu', component: PTabMenu },
    ],
  },
];

export const routing = RouterModule.forChild(routes);

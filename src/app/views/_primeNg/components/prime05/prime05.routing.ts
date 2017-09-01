import { Prime05 } from './prime05.component';

import { PConfirmDialog } from './components/pconfirmDialog/pconfirmDialog.component';
import { PLightBox } from './components/plightBox/plightBox.component';
import { PToolTip } from './components/ptoolTip/ptoolTip.component';
import { PDialog } from './components/pdialog/pdialog.component';
import { POverlayPanel } from './components/poverlayPanel/poverlayPanel.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Prime05,
    children: [
      // { path: '', component: InputGroup },

      { path: 'confirmDialog', component: PConfirmDialog },
      { path: 'lightBox', component: PLightBox },
      { path: 'toolTip', component: PToolTip },
      { path: 'dialog', component: PDialog },

    ],
  },
];

export const routing = RouterModule.forChild(routes);

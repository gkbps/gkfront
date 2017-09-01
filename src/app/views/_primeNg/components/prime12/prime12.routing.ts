import { Prime12 } from './prime12.component';

import { PResponsive } from './components/presponsive/presponsive.component';
import { PDefer } from './components/pdefer/pdefer.component';
import { PCaptcha } from './components/pcaptcha/pcaptcha.component';
import { PValidation } from './components/pvalidation/pvalidation.component';
import { PCodeHighlighter } from './components/pcodeHighlighter/pcodeHighlighter.component';
import { PRtl } from './components/prtl/prtl.component';
import { PBlockUI } from './components/pblockUI/pblockUI.component';
import { PInplace } from './components/pinplace/pinplace.component';
import { PProgressBar } from './components/pprogressBar/pprogressBar.component';
import { PTerminal } from './components/pterminal/pterminal.component';
// import { } from './components';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Prime12,
    children: [
      { path: 'responsive', component: PResponsive },
      { path: 'defer', component: PDefer },
      { path: 'captcha', component: PCaptcha },
      { path: 'validation', component: PValidation },
      { path: 'codeHighlighter', component: PCodeHighlighter },
      { path: 'rtl', component: PRtl },
      { path: 'blockUI', component: PBlockUI },
      { path: 'inplace', component: PInplace },
      { path: 'progressBar', component: PProgressBar },
      { path: 'terminal', component: PTerminal },

      // { path: '', component:  },

    ],
  },
];

export const routing = RouterModule.forChild(routes);

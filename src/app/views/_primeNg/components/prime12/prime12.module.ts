// Components
import { Prime12 } from './prime12.component';

import { PResponsiveModule } from './components/presponsive/presponsive.module';
import { PDeferModule } from './components/pdefer/pdefer.module';
import { PCaptchaModule } from './components/pcaptcha/pcaptcha.module';
import { PValidationModule } from './components/pvalidation/pvalidation.module';
import { PCodeHighlighterModule } from './components/pcodeHighlighter/pcodeHighlighter.module';
import { PRtlModule } from './components/prtl/prtl.module';
import { PBlockUIModule } from './components/pblockUI/pblockUI.module';
import { PInplaceModule } from './components/pinplace/pinplace.module';
import { PProgressBarModule } from './components/pprogressBar/pprogressBar.module';
import { PTerminalModule } from './components/pterminal/pterminal.module';

import {TerminalService} from 'primeng/components/terminal/terminalservice';


// import { Module } from './components';

// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,         // Require for <router-outlet>

    PResponsiveModule,
    PDeferModule,
    PCaptchaModule,
    PValidationModule,
    PCodeHighlighterModule,
    PRtlModule,
    PBlockUIModule,
    PInplaceModule,
    PProgressBarModule,
    PTerminalModule,

  ],
  declarations: [
    Prime12,

  ],
  providers: [
    TerminalService
  ],
})
export class Prime12Module {
}

// Components
import { Prime05 } from './prime05.component';

import { PConfirmDialogModule } from './components/pconfirmDialog/pconfirmDialog.module';
import { PLightBoxModule } from './components/plightBox/plightBox.module';
import { PToolTipModule } from './components/ptoolTip/ptoolTip.module';
import { PDialogModule } from './components/pdialog/pdialog.module';
import { POverlayPanelModule } from './components/poverlayPanel/poverlayPanel.module';

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
    
    

    PConfirmDialogModule,
    PLightBoxModule,
    PToolTipModule,
    PDialogModule,
    POverlayPanelModule,
  ],
  declarations: [
    Prime05,

  ],
  providers: [
  ],
})
export class Prime05Module {
}

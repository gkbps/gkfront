// Components
import { Prime07 } from './prime07.component';

import { PContextMenuModule } from './components/pcontextMenu/pcontextMenu.module';
import { PMenuModule } from './components/pmenu/pmenu.module';
import { PPanelMenuModule } from './components/ppanelMenu/ppanelMenu.module';
import { PStepModule } from './components/pstep/pstep.module';
import { PTieredMenuModule } from './components/ptieredMenu/ptieredMenu.module';
import { PBreadcumModule } from './components/pbreadcum/pbreadcum.module';
import { PMegaMenuModule } from './components/pmegaMenu/pmegaMenu.module';
import { PMenuBarModule } from './components/pmenuBar/pmenuBar.module';
import { PSlideMenuModule } from './components/pslideMenu/pslideMenu.module';
import { PTabMenuModule } from './components/ptabMenu/ptabMenu.module';

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

    PContextMenuModule,
    PMenuModule,
    PPanelMenuModule,
    PStepModule,
    PTieredMenuModule,
    PBreadcumModule,
    PMegaMenuModule,
    PMenuBarModule,
    PSlideMenuModule,
    PTabMenuModule,
  ],
  declarations: [
    Prime07,

  ],
  providers: [
  ],
})
export class Prime07Module {
}

// Components
import { Prime04 } from './prime04.component';

import { PAccordionModule } from './components/paccordion/paccordion.module';
import { PPanelModule } from './components/ppanel/ppanel.module';
import { PTabViewModule } from './components/ptabView/ptabView.module';
import { PFieldSetModule } from './components/pfieldSet/pfieldSet.module';
import { PGridModule } from './components/pgrid/pgrid.module';
import { PToolbarModule } from './components/ptoolbar/ptoolbar.module';

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
        
    PAccordionModule,
    PPanelModule,
    PTabViewModule,
    PFieldSetModule,
    PGridModule,
    PToolbarModule,
  ],
  declarations: [
    Prime04,

  ],
  providers: [
  ],
})
export class Prime04Module {
}

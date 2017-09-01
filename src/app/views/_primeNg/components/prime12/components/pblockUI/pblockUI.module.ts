// Components
import { PBlockUI } from './pblockUI.component';

import { routing } from './pblockUI.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { BlockUIModule, PanelModule, ButtonModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    BlockUIModule,
    PanelModule,
    ButtonModule,
  ],
  declarations: [
    PBlockUI,
  ],
  providers: [
  ],
})
export class PBlockUIModule {
}

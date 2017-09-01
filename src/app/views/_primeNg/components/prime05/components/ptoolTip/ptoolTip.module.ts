// Components
import { PToolTip } from './ptoolTip.component';

import { routing } from './ptoolTip.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { InputTextModule, TooltipModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    TooltipModule,
    InputTextModule,
  ],
  declarations: [
    PToolTip,
  ],
  providers: [
  ],
})
export class PToolTipModule {
}

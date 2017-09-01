// Components
import { PPanel } from './ppanel.component';

import { routing } from './ppanel.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { PanelModule } from 'primeng/primeng';
import { SplitButtonModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    PanelModule,
    SplitButtonModule,
    GrowlModule,
  ],
  declarations: [
    PPanel,
  ],
  providers: [
  ],
})
export class PPanelModule {
}

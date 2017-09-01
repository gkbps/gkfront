// Components
import { PLine } from './pline.component';

import { routing } from './pline.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { ChartModule, GrowlModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    ChartModule,
    GrowlModule,
  ],
  declarations: [
    PLine,
  ],
  providers: [
  ],
})
export class PLineModule {
}

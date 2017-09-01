// Components
import { PGrowl } from './pgrowl.component';

import { routing } from './pgrowl.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { GrowlModule, ButtonModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    GrowlModule,
    ButtonModule,
  ],
  declarations: [
    PGrowl,
  ],
  providers: [
  ],
})
export class PGrowlModule {
}

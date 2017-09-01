// Components
import { PStep } from './pstep.component';

import { routing } from './pstep.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { StepsModule, MenuItem, GrowlModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    StepsModule,
    GrowlModule
  ],
  declarations: [
    PStep,
  ],
  providers: [
  ],
})
export class PStepModule {
}

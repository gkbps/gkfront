// Components
import { PProgressBar } from './pprogressBar.component';

import { routing } from './pprogressBar.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { ProgressBarModule, GrowlModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    ProgressBarModule,
    GrowlModule,
  ],
  declarations: [
    PProgressBar,
  ],
  providers: [
  ],
})
export class PProgressBarModule {
}

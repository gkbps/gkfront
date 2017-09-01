// Components
import { PMask } from './pmask.component';

import { routing } from './pmask.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { InputMaskModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,  
    routing,

    InputMaskModule,
  ],
  declarations: [
    PMask,
  ],
  providers: [
  ],
})
export class PMaskModule {
}

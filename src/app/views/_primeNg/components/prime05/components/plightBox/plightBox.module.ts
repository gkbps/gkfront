// Components
import { PLightBox } from './plightBox.component';

import { routing } from './plightBox.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { LightboxModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    LightboxModule,
  ],
  declarations: [
    PLightBox,
  ],
  providers: [
  ],
})
export class PLightBoxModule {
}

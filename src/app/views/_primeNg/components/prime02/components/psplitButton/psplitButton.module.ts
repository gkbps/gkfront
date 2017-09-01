// Components
import { PSplitButton } from './psplitButton.component';

import { routing } from './psplitButton.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { SplitButtonModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    SplitButtonModule,
    GrowlModule,
  ],
  declarations: [
    PSplitButton,
  ],
  providers: [
  ],
})
export class PSplitButtonModule {
}

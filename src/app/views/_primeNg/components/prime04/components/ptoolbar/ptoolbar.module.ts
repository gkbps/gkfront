// Components
import { PToolbar } from './ptoolbar.component';

import { routing } from './ptoolbar.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { ToolbarModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { SplitButtonModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
  ],
  declarations: [
    PToolbar,
  ],
  providers: [
  ],
})
export class PToolbarModule {
}

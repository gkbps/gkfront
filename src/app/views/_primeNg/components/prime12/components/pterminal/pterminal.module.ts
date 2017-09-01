// Components
import { PTerminal } from './pterminal.component';

import { routing } from './pterminal.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { TerminalModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    TerminalModule,
  ],
  declarations: [
    PTerminal,
  ],
  providers: [
  ],
})
export class PTerminalModule {
}

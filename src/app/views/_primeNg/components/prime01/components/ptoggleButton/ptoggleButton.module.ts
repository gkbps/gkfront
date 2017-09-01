// Components
import { PToggleButton } from './ptoggleButton.component';

import { routing } from './ptoggleButton.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { ToggleButtonModule } from 'primeng/primeng';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    routing,
    ToggleButtonModule,
  ],
  declarations: [
    PToggleButton,
  ],
  providers: [
  ],
})
export class PToggleButtonModule {
}

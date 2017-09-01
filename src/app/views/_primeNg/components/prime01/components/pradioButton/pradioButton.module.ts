// Components
import { PRadioButton } from './pradioButton.component';

import { routing } from './pradioButton.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { RadioButtonModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    routing,

    RadioButtonModule,
  ],
  declarations: [
    PRadioButton,
  ],
  providers: [
  ],
})
export class PRadioButtonModule {
}

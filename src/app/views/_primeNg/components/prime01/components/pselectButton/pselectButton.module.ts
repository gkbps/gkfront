// Components
import { PSelectButton } from './pselectButton.component';

import { routing } from './pselectButton.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { SelectButtonModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    routing,

    SelectButtonModule,
    ButtonModule,

  ],
  declarations: [
    PSelectButton,
  ],
  providers: [
  ],
})
export class PSelectButtonModule {
}

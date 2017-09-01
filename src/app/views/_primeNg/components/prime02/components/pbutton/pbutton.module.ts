// Components
import { PButton } from './pbutton.component';

import { routing } from './pbutton.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { ButtonModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,


    routing,

    ButtonModule,
  ],
  declarations: [
    PButton,
  ],
  providers: [
  ],
})
export class PButtonModule {
}

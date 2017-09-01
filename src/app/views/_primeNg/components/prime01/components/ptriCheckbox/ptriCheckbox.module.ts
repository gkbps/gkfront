// Components
import { PTriCheckbox } from './ptriCheckbox.component';

import { routing } from './ptriCheckbox.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { TriStateCheckboxModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,

    routing,

    TriStateCheckboxModule,
  ],
  declarations: [
    PTriCheckbox,
  ],
  providers: [
  ],
})
export class PTriCheckboxModule {
}
